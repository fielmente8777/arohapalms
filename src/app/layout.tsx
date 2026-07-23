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
      <body suppressHydrationWarning={true}>
        {children}

        <LandingFooter />
        <Whatsapp whatsAppNumber={contact.phone[0]} />
        <Call callNumber={contact.phone[0]} />
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
