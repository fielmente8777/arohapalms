export const cancellationRefundPolicyData = {
  title: "Cancellation & Refund Policy",
  lastUpdated: "Applies to all bookings made directly with Aroha Palms.",
  description:
    "Plans change. This policy sets out exactly where you stand if they do, and gives you the choice of a future stay instead of a refund whenever that suits you better. One policy applies to every villa, apartment and estate booking; only peak dates are treated differently.",

  sections: [
    {
      title: "1. How charges are calculated",
      content: (
        <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2 md:space-y-3">
          <li>
            <strong>Booking value:</strong> All percentages below are calculated on the full booking value of your stay, excluding GST and add-on services, regardless of how much has been paid so far.
          </li>
          <li>
            <strong>GST:</strong> GST paid on a booking is remitted to the government and cannot be recovered, so it is not refunded when you cancel.
          </li>
          <li>
            <strong>Processing fee:</strong> A 10% processing fee is deducted from every cash refund. Credits for a future stay carry no processing fee.
          </li>
          <li>
            <strong>Advance payments:</strong> The cancellation charge is deducted from the amount you have paid and any balance is refunded. If the amount paid is less than the charge, no refund is due.
          </li>
        </ul>
      ),
    },
    {
      title: "2. Cancellation charges — standard dates",
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#142536] text-white text-sm sm:text-base">
                  <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-200">Notice before check-in</th>
                  <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-200">Cash refund</th>
                  <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-200">Or, future-stay credit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 sm:p-4 font-medium">30 days or more</td>
                  <td className="p-3.5 sm:p-4">100% of booking value, less 10% fee</td>
                  <td className="p-3.5 sm:p-4 font-medium text-[#005ba4]">100% of booking value</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 sm:p-4 font-medium">15 to 29 days</td>
                  <td className="p-3.5 sm:p-4">50% of booking value, less 10% fee</td>
                  <td className="p-3.5 sm:p-4 font-medium text-[#005ba4]">75% of booking value</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 sm:p-4 font-medium">Less than 15 days, or no-show</td>
                  <td className="p-3.5 sm:p-4 text-red-600 font-medium">No refund</td>
                  <td className="p-3.5 sm:p-4 text-gray-500">No credit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="rounded-md bg-[#f4efe6] p-4 sm:p-5 border-l-4 border-[#005ba4]">
            <p className="font-semibold text-blue mb-1">Illustration:</p>
            <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
              A booking value of ₹1,00,000 cancelled 20 days before check-in: 50% is ₹50,000, less the 10% fee, so ₹45,000 is refunded. Alternatively, you may take ₹75,000 as credit for a future stay. GST paid is not refunded in either case.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "3. Peak dates",
      content: (
        <div className="space-y-5">
          <p>A booking is a peak booking if any night of the stay falls on:</p>
          <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-1.5">
            <li>20 December to 5 January</li>
            <li>Diwali or Dussehra</li>
            <li>A long weekend — any period of four or more consecutive days created by a public holiday falling next to a weekend</li>
          </ul>

          <div className="overflow-x-auto rounded-lg border border-gray-200 mt-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#142536] text-white text-sm sm:text-base">
                  <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-200">Notice before check-in</th>
                  <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-200">Cash refund</th>
                  <th className="p-3.5 sm:p-4 font-semibold border-b border-gray-200">Or, future-stay credit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 sm:p-4 font-medium">60 days or more</td>
                  <td className="p-3.5 sm:p-4 text-red-600 font-medium">No refund</td>
                  <td className="p-3.5 sm:p-4 font-medium text-[#005ba4]">50% of booking value</td>
                </tr>
                <tr className="hover:bg-gray-50/50">
                  <td className="p-3.5 sm:p-4 font-medium">Less than 60 days, or no-show</td>
                  <td className="p-3.5 sm:p-4 text-red-600 font-medium">No refund</td>
                  <td className="p-3.5 sm:p-4 text-gray-500">No credit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm sm:text-base italic text-gray-600">
            Peak bookings cannot be moved to other dates. The re-let and name-transfer terms in section 4 still apply.
          </p>
        </div>
      ),
    },
    {
      title: "4. What we do to keep this fair",
      content: (
        <ol className="list-decimal pl-5 sm:pl-6 md:pl-8 space-y-3">
          <li>
            <strong>24-hour change of mind:</strong> Cancel within 24 hours of paying, with check-in at least 30 days away, and we refund the full booking value with no processing fee.
          </li>
          <li>
            <strong>If we re-let your nights:</strong> If we rebook the same villa or apartment for the same nights, we return what we recover, less 10%, up to the amount you forfeited.
          </li>
          <li>
            <strong>Hand your booking on:</strong> You may transfer your booking to another lead guest at no charge, up to 48 hours before check-in, with that guest’s valid ID.
          </li>
          <li>
            <strong>One free date change:</strong> Ask 30 days or more before check-in to move your stay once, to the same unit, for dates within the next 12 months. Any difference in seasonal rate applies. Not available for peak bookings.
          </li>
          <li>
            <strong>Credit you can use:</strong> Credit is valid for 12 months from your original check-in date and can be used for any Aroha Palms villa or apartment. Any difference in seasonal rate applies. Credit cannot be exchanged for cash.
          </li>
          <li>
            <strong>When travel is impossible:</strong> If a government travel restriction, an airport closure or an official red weather alert for North Goa on your check-in date prevents you from reaching us, 100% of your booking value becomes credit. Ordinary monsoon weather does not qualify.
          </li>
          <li>
            <strong>If we have to cancel:</strong> You receive a full refund, including GST, within 7 working days — or, if you prefer, a comparable stay on the estate.
          </li>
        </ol>
      ),
    },
    {
      title: "5. Other terms",
      content: (
        <ul className="list-disc pl-5 sm:pl-6 md:pl-8 space-y-2.5">
          <li>
            <strong>Add-on services</strong> (private chef, airport transfers, bonfire, watersports) are fully refundable if cancelled 48 hours or more before they are due. Ingredients already purchased are billed at cost.
          </li>
          <li>
            <strong>Security deposit</strong> is always refunded in full when a booking is cancelled.
          </li>
          <li>
            <strong>Early departure:</strong> no refund or credit is given for unused nights once you have checked in.
          </li>
          <li>
            <strong>Third-party platforms:</strong> Bookings made through Airbnb, Booking.com or any other platform follow that platform’s cancellation terms.
          </li>
        </ul>
      ),
    },
    {
      title: "6. How to cancel",
      content: (
        <div className="space-y-4">
          <p>
            Send your cancellation in writing by email or WhatsApp. The notice period is counted from the time we receive your message, and we will confirm receipt in writing. Refunds reach your original payment method within 7 working days of confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-2">
            <a
              href="mailto:reserve@arohapalms.com"
              className="inline-flex items-center gap-2 text-blue hover:underline font-medium"
            >
              <span>Email:</span> reserve@arohapalms.com
            </a>
            <a
              href="https://wa.me/919834220573"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue hover:underline font-medium"
            >
              <span>WhatsApp:</span> +91 98342 20573
            </a>
          </div>
        </div>
      ),
    },
  ],
};
