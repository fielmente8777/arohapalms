import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import "./style.scss";
import LandingFooter from "@/components/footer/LandingFooter";
import Script from "next/script";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import { contact } from "@/utils/constent";
import Call from "@/components/ContactButton/Call";

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  adjustFontFallback: true,
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Aroha Palms",
  description: "Aroha Palms, Goa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${firaSans.variable} h-full antialiased`}>
      <head>
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
        {children}

        <LandingFooter />
        <Whatsapp whatsAppNumber={contact.phone[0]} />
        <Call callNumber={contact.phone[0]} />
      </body>
      {/* <!-- Eazbot Script (Next.js) --> */}
      <Script id="chatbot-config" strategy="afterInteractive">
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
      />
    </html>
  );
}
