import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import "./style.scss";
import LandingFooter from "@/components/footer/LandingFooter";
import Script from "next/script";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Call from "@/components/ContactButton/Call";
import PopUpForm from "@/components/pop-up/PopUpForm";
import { WebProvider } from "@/context-api/WebContext";
import RoomDetailsPopup from "@/components/pop-up/RoomDetailsPopup";
import Image from "next/image";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
  display: "swap",
  preload: true,
});

export const metadata = {
  title:
    "Luxury Villas & Apartments in North Goa | Aroha Palms Official Website",

  description:
    "Book luxury villas and apartments at Aroha Palms in North Goa. Private pools, Greek-inspired architecture, spacious stays, concierge service, and the best direct booking offers.",

  keywords: [
    "Aroha Palms",
    "Luxury Villas Goa",
    "Private Pool Villas Goa",
    "North Goa Villas",
    "Mandrem Villas",
    "Pilerne Apartments",
    "Holiday Villas Goa",
    "Family Villas Goa",
    "Corporate Offsite Goa",
    "Wedding Villas Goa",
    "Luxury Apartments Goa",
    "Beach Villas Goa",
    "Goa Stay",
    "Villa Booking Goa",
    "Luxury Accommodation Goa",
  ],

  openGraph: {
    title: "Luxury Villas & Apartments in North Goa | Aroha Palms",
    description:
      "Experience barefoot luxury at Aroha Palms. Greek-inspired villas and apartments with private pools, concierge services, and peaceful stays in North Goa.",
    siteName: "Aroha Palms",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aroha Palms Luxury Villas",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaSans.variable} h-full antialiased`}>
      <head>
        {/* <!-- Facebook Pixel Code --> */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1266443945568311'); 
            fbq('track', 'PageView');`}
        </Script>
        <noscript>
          <Image
            height="1"
            width="1"
            alt="facebook pixel"
            src="https://www.facebook.com/tr?id=1266443945568311&ev=PageView
&noscript=1"
          />
        </noscript>
        {/* <!-- End Facebook Pixel Code --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-D52BPEV9BS"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-D52BPEV9BS');`}
        </Script>

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5Z7WM2BP');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}
      </head>

      <body suppressHydrationWarning={true}>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5Z7WM2BP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <WebProvider>
          {children}

          <PopUpForm />
          <RoomDetailsPopup />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <Call callNumber={contact.phone[0]} />
        </WebProvider>
      </body>
      {/* <!-- Eazbot Script (Next.js) --> */}
      {/* <Script id="chatbot-config" strategy="afterInteractive">
        {`
          window.eazbotConfig = {
            ndid: "4c13e800-cf4a-43f1-a448-d6df8149defe",
            hid: "70816004",
          };
        `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      /> */}
    </html>
  );
}
