import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { webcrypto } from 'node:crypto';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

function load(file, globals = {}) {
  const source = ts.transpileModule(readFileSync(new URL(`../${file}`, import.meta.url), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const testModule = { exports: {} };
  vm.runInNewContext(source, {
    module: testModule, exports: testModule.exports, Date, Math, AbortSignal, URLSearchParams,
    crypto: webcrypto,
    require: (id) => {
      assert.equal(id, '@/utils/constent');
      return { contact: { formDomain: 'test-domain', formHid: 'test-hotel' } };
    },
    ...globals,
  }, { filename: file });
  return testModule.exports;
}

function setup(response = { ok: true, json: async () => ({ Status: true }) }) {
  const storage = new Map();
  const calls = [];
  const window = {
    location: { search: '?utm_source=google&utm_campaign=christmas&gclid=test-click', pathname: '/pilerne/villa-majestic/', href: 'https://arohapalms.com/pilerne/villa-majestic/' },
    sessionStorage: { getItem: (key) => storage.get(key) ?? null, setItem: (key, value) => storage.set(key, value) },
  };
  const api = load('src/utils/enquiry.ts', {
    window, document: { referrer: 'https://www.google.com/' },
    fetch: async (url, options) => { calls.push({ url, options }); if (response instanceof Error) throw response; return response; },
  });
  return { api, storage, calls, window };
}

const input = { name: 'QA Test', phone: '+919999999999', villa: 'Villa Majestic', checkIn: '2026-12-19', checkOut: '2026-12-21', guests: '8', form: 'enquiry-form' };

test('a confirmed save carries one reference through CRM, receipt and conversion without guest PII in the event', async () => {
  const { api, calls } = setup();
  api.captureAttribution();
  const result = await api.saveEnquiry(input);
  assert.equal(result.saved, true);
  assert.equal(calls.length, 1);
  const payload = JSON.parse(calls[0].options.body);
  assert.match(payload.Description, new RegExp(`Lead ID: ${result.leadId}`));
  assert.match(payload.Description, /Guests: 8/);
  assert.match(payload.Description, /gclid: test-click/);
  assert.equal(payload.created_from, 'webform:google_ads');
  assert.equal(payload.check_in, '2026-12-19');
  assert.match(result.waText, new RegExp(result.leadId));
  const event = api.consumeEnquiryConversion();
  assert.equal(event.lead_id, result.leadId);
  assert.equal(event.event_id, result.leadId);
  assert.equal(event.event, 'enquiry_saved');
  assert.ok(!JSON.stringify(event).includes(input.phone));
  assert.ok(!JSON.stringify(event).includes(input.name));
  assert.equal(api.consumeEnquiryConversion(), null, 'rerenders/reloads must not count again');
});

for (const [name, response] of [
  ['CRM rejection', { ok: true, json: async () => ({ Status: false }) }],
  ['missing status', { ok: true, json: async () => ({}) }],
  ['null response', { ok: true, json: async () => null }],
  ['string status', { ok: true, json: async () => ({ Status: 'true' }) }],
  ['HTTP failure', { ok: false, json: async () => ({ Status: true }) }],
  ['malformed JSON', { ok: true, json: async () => { throw new Error('invalid JSON'); } }],
  ['network/timeout error', new Error('network timeout')],
]) {
  test(`${name} cannot become a success or conversion`, async () => {
    const { api } = setup(response);
    const result = await api.saveEnquiry(input);
    assert.equal(result.saved, false);
    assert.equal(api.readStoredEnquiry(), null);
    assert.equal(api.consumeEnquiryConversion(), null);
  });
}

test('direct, stale, future and malformed thank-you visits cannot convert', () => {
  const { api, storage } = setup();
  assert.equal(api.readStoredEnquiry(), null);
  const valid = { leadId: 'AP-TEST', saved: true, waText: 'test', fired: false, ts: Date.now() };
  for (const receipt of [null, {}, { ...valid, ts: Date.now() - 1800001 }, { ...valid, ts: Date.now() + 10000 }, { ...valid, saved: 'true' }, { ...valid, waText: null }, { ...valid, fired: 'false' }]) {
    storage.set('aroha_enquiry', JSON.stringify(receipt));
    assert.equal(api.readStoredEnquiry(), null);
    assert.equal(api.consumeEnquiryConversion(), null);
  }
  storage.set('aroha_enquiry', '{bad');
  assert.equal(api.readStoredEnquiry(), null);
});

test('blocked storage does not throw after a successful CRM save', async () => {
  const { api, window, calls } = setup();
  Object.defineProperty(window, 'sessionStorage', { get() { throw new Error('storage denied'); } });
  assert.doesNotThrow(() => api.captureAttribution());
  assert.equal((await api.saveEnquiry(input)).saved, true);
  assert.equal(calls.length, 1);
  assert.equal(api.readStoredEnquiry(), null);
  assert.equal(api.consumeEnquiryConversion(), null);
});

test('a conversion requires a durable deduplication marker', async () => {
  const { api, window } = setup();
  await api.saveEnquiry(input);
  window.sessionStorage.setItem = () => { throw new Error('quota exceeded'); };
  assert.equal(api.consumeEnquiryConversion(), null);
});

test('other forms retain the reference created before their CRM request', () => {
  const { api } = setup();
  const id = api.newLeadId();
  const receipt = api.rememberEnquiry(true, input, id);
  assert.equal(receipt.leadId, id);
  assert.equal(api.consumeEnquiryConversion().lead_id, id);
});

test('attribution survives internal navigation and filters invalid stored values', () => {
  const { api, window, storage } = setup();
  api.captureAttribution();
  window.location.search = '';
  window.location.pathname = '/contact-us/';
  api.captureAttribution();
  assert.equal(api.getAttribution().landing_page, '/pilerne/villa-majestic/');
  assert.equal(api.getAttribution().gclid, 'test-click');
  storage.set('aroha_attr', 'null');
  assert.equal(Object.keys(api.getAttribution()).length, 0);
  storage.set('aroha_attr', JSON.stringify({ utm_source: { bad: true }, unexpected: 'discard' }));
  assert.equal(Object.keys(api.getAttribution()).length, 0);
});

test('calendar dates stay correct in India and western timezones, and clearing a date removes it', () => {
  const { formatLocalDate } = load('src/utils/date.ts');
  const previous = process.env.TZ;
  try {
    for (const timezone of ['Asia/Kolkata', 'America/Los_Angeles', 'Pacific/Auckland']) {
      process.env.TZ = timezone;
      assert.equal(formatLocalDate(new Date(2026, 11, 19)), '2026-12-19');
    }
    assert.equal(formatLocalDate(null), '');
    assert.equal(formatLocalDate(new Date('invalid')), '');
  } finally {
    if (previous === undefined) delete process.env.TZ;
    else process.env.TZ = previous;
  }
});
