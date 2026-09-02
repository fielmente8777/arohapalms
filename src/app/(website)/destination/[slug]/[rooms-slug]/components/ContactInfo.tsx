import { Section } from "@/components/sectionComponants";

interface ContactInfoProps {
  data: {
    phones: string[];
    reservation: string;
    whatsapp: string;
  };
}

const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <Section defaultPadding={false}>
      <div className="hidden md:mx-auto flex max-w-4xl flex-col items-center text-center">
        {/* Phone Numbers */}
        <p className="text-sm font-medium tracking-wide text-[#0E2A5C]">
          {data.phones.join(" & ")}
        </p>

        {/* Reservation */}
        <p className="mt-8 text-sm font-semibold uppercase tracking-wide text-[#0E2A5C]">
          {data.reservation}
        </p>

        {/* WhatsApp */}
        <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#0E2A5C]">
          {data.whatsapp}
        </p>
      </div>
    </Section>
  );
};

export default ContactInfo;
