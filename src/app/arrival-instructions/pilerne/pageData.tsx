export const guestArrivalData = {
  title: "Guest Arrival Instructions - Pilerne",

  introduction: (
    <>
      Welcome to <strong>Aroha Palms, Pilerne Villa!</strong> We are delighted
      to host you. Please follow these instructions for a smooth arrival.
    </>
  ),

  sections: [
    {
      icon: "map",
      title: "Google Maps Location",
      content: (
        <a
          href="https://maps.app.goo.gl/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0B2D63] underline font-medium hover:text-[#184A96]"
        >
          Click for Google Maps Location
        </a>
      ),
    },

    {
      icon: "plane",
      title: "Arrival by Air",
      points: [
        <>
          <strong>Goa International Airport (Dabolim):</strong> Approximately
          60 minutes from the property.
        </>,
        <>
          <strong>Manohar International Airport (Mopa):</strong> Approximately
          40 minutes from the property.
        </>,
        <>
          <strong>Recommended Taxi Service:</strong> Please inform us in advance
          and we can arrange a paid airport pickup. Alternatively, you can hire
          a self-driven car or book a taxi upon arrival at the airport.
        </>,
      ],
    },

    {
      icon: "train",
      title: "Arrival by Train",
      points: [
        <>
          <strong>Nearest Railway Station:</strong> Thivim
        </>,
        <>
          <strong>Distance to the Property:</strong> 18 km
        </>,
        <>
          <strong>Recommended Taxi Service:</strong> Please inform us in advance
          and we can arrange a paid pickup. Alternatively, you can hire a
          self-driven car or book a taxi from the railway station.
        </>,
      ],
    },

    {
      icon: "car",
      title: "Arrival by Road",
      points: [
        <>From North Goa: Take NH66 and follow signs towards Pilerne.</>,
        <>From South Goa: Use NH66 towards Pilerne.</>,
        <>
          <strong>Parking:</strong> On-site parking is available for two cars
          per villa.
        </>,
      ],
    },

    {
      icon: "key",
      title: "Check-in Process",
      points: [
        <>
          Check-in time is <strong>3:00 PM</strong>. If you expect to arrive
          earlier, please inform the villa owner or representative in advance so
          arrangements can be made if possible.
        </>,

        <>
          You will be welcomed by the villa manager or representative, who will
          show you around the villa and provide you with the keys, remotes, and
          other important information.
        </>,

        <>
          Please provide a valid government-issued photo ID and sign the
          Customer Conduct document during check-in.
        </>,

        <>
          A refundable security deposit will be collected during check-in and
          returned at checkout provided there are no damages or additional
          charges.
        </>,

        <>
          The villa representative will explain how to use the appliances,
          electronics, and other facilities available in the villa.
        </>,

        <>
          Information about nearby attractions, transportation, restaurants, and
          other local amenities will also be shared with you.
        </>,

        <>
          The villa manager or representative will remain available throughout
          your stay to assist you with any questions or concerns.
        </>,

        <>
          Every villa has a fully equipped kitchen. Tea and coffee can be
          prepared by the caretakers. A private chef can also be arranged on
          request for an additional charge. Please inform the manager in
          advance.
        </>,

        <>
          There are several restaurants and cafés nearby. Food delivery services
          such as Swiggy and other online platforms are also available.
        </>,

        <>
          Emergency contact details for the villa manager or representative will
          be provided upon arrival and are also available in the welcome folder
          inside the villa.
        </>,
      ],
    },

    {
      icon: "phone",
      title: "Need Assistance?",
      content: (
        <>
          Please contact our villa manager or representative using the contact
          details shared in your booking confirmation or welcome instructions if
          you require any assistance during your stay.
        </>
      ),
    },
  ],

  closingNote: (
    <>
      <strong>Enjoy your stay in Goa!</strong>
      <br />
      We wish you a relaxing, comfortable, and memorable stay at Aroha Palms,
      Pilerne.
    </>
  ),
};