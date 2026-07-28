export const guestArrivalData = {
  title: "Guest Arrival Instructions - Mandrem",

  introduction: (
    <>
      Welcome to <strong>Aroha Palms, Mandrem Villa!</strong> We are delighted to
      host you. Please follow these instructions for a smooth arrival.
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
          <strong>Goa International Airport (Dabolim):</strong> Approximately 90
          minutes from the property.
        </>,
        <>
          <strong>Manohar International Airport (Mopa):</strong> Approximately 45
          minutes from the property.
        </>,
        <>
          <strong>Recommended Taxi Service:</strong> Please inform us and we can
          arrange a taxi pickup on payment. Alternatively, you can hire a
          self-driven car or book a taxi upon arrival at the airport.
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
          <strong>Distance to the property:</strong> 30 km
        </>,
        <>
          <strong>Recommended Taxi Service:</strong> Please inform us and we can
          arrange a taxi pickup on payment. Alternatively, you can hire a
          self-driven car or book a taxi upon arrival at the railway station.
        </>,
      ],
    },

    {
      icon: "car",
      title: "Arrival by Road",
      points: [
        <>From North Goa: Take NH66 and follow the signs towards Mandrem.</>,
        <>From South Goa: Use NH66 towards Mandrem.</>,
        <>
          <strong>Parking:</strong> On-site parking available for two cars per
          villa.
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
          You will be greeted by the villa manager or representative upon
          arrival, who will show you around the villa and provide you with keys,
          remotes, and other essential information.
        </>,

        <>
          Please provide a valid government-issued ID and sign the Customer
          Conduct document during check-in.
        </>,

        <>
          A refundable security deposit will be collected during check-in and
          returned at check-out, provided there are no damages or additional
          charges.
        </>,

        <>
          The villa representative will explain the use of appliances,
          electronics, and other facilities available in the villa.
        </>,

        <>
          Information about nearby attractions, transportation, and local
          amenities will also be shared with you.
        </>,

        <>
          The villa manager or representative will remain available throughout
          your stay for any assistance or queries.
        </>,

        <>
          Every villa includes a fully equipped kitchen. Caretakers can prepare
          tea and coffee. A private chef can also be arranged on request for an
          additional charge. Please inform the manager in advance.
        </>,

        <>
          Several restaurants and cafés are located nearby, and a list of
          recommended restaurants is available inside the villa. Food delivery
          services such as Swiggy are also available.
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
          Please contact our manager <strong>Mr. Kismat</strong> for any
          assistance.
          <br />
          <strong>+91 88301 242549</strong>
        </>
      ),
    },
  ],

  closingNote: (
    <>
      <strong>Enjoy your stay in Goa!</strong>
      <br />
      We look forward to welcoming you to Aroha Palms, Mandrem.
    </>
  ),
};