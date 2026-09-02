export const cancellationRefundPolicyData = {
  title: "Cancellation & Refund Policy",
  lastUpdated: "June 11, 2026",
  description:
    "This policy outlines how cancellations, changes, and refunds work at Aroha Palms. This policy is managed contractually by our legal parent company, AKAHATA HOSPITALITY PRIVATE LIMITED.",

  sections: [
    {
      title: "1. Booking Confirmation",
      content: (
        <>
          Your reservation is officially confirmed once your deposit or full
          payment has cleared through our gateway and we issue your{" "}
          Booking Confirmation Voucher. All cancellation timelines are
          calculated based on your scheduled check-in date, using a standard
          cutoff time of 12:00 PM (Noon) IST.
        </>
      ),
    },
    {
      title: "2. Standard Cancellation Rules",
      content: (
        <>
          Because our private villas and apartments are reserved exclusively for
          individual groups, cancellations on short notice heavily disrupt our
          small team.
        </>
      ),
      points: [
        <>
          Cancellations made 60 days or more before your check-in date: Eligible
          for a full refund, minus any third-party payment gateway transaction
          fees.
        </>,
        <>
          Cancellations made between 60 and 30 days before check-in: Eligible
          for a 50% partial refund.
        </>,
        <>
          Cancellations made less than 30 days before check-in: Bookings are
          non-refundable.
        </>,
      ],
    },
    {
      title: "3. Special Booking Rules (Peak Season & Groups)",
      content: (
        <>
          <b>Peak Season (Dec 20 – Jan 5):</b>Due to extremely high holiday
          demand, cancellations for bookings during Christmas and New Year must
          be made 90 days or more before check-in to get a refund. Within 90
          days, holiday bookings are completely non-refundable.
          <br />
          <br />
          <b>Group Buyouts:</b> If you book multiple villas or units together
          for a large group or retreat, cancellations made 60 days or more
          before arrival are subject to a 50% non-refundable holding fee. Within
          60 days, group buyouts are non-refundable.
        </>
      ),
    },
    {
      title: "4. Mid-Stay Changes & No-Shows",
      content: (
        <>
          If you choose to shorten your trip or check out early after you have
          already arrived, we cannot offer a partial or pro-rated refund. If you
          do not arrive on your scheduled check-in date without letting us know,
          it will be marked as a No-Show, your booking will be released, and all
          payments are non-refundable.
        </>
      ),
    },
    {
      title: "5. How Refunds Are Processed",
      content: (
        <>
          To comply with online payment regulations and Google’s merchant
          policies, all refunds are strictly bound by the following rules:
        </>
      ),
      points: [
        <>
          All approved refunds will be credited back directly to the original
          payment method (Credit Card, Debit Card, Net Banking, or UPI account)
          used to make the booking. We cannot issue cash refunds or send bank
          wires to alternative names or accounts.
        </>,
        <>
          Once approved, the refund transaction will be initiated immediately.
          The funds will reflect back in your account within 5 to 7 business
          days, depending on your bank’s processing cycles.
        </>,
      ],
    },
    {
      title: "6. Written Notice",
      content: (
        <>
          To prevent any confusion, all cancellations must be sent to us in
          writing via email to <b>concierge@arohapalms.com </b> using the email
          address you used to book. We cannot accept phone calls, text messages,
          or WhatsApp updates as official cancellations.
        </>
      ),
    },
  ],
};
