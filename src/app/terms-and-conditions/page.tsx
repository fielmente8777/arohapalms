import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

import TermsConditions from "./components/TermsConditions";
import { termsConditionsData } from "./pageData";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-24 lg:pt-28">
        <TermsConditions {...termsConditionsData} />
      </main>
      <Footer {...WebfooterData} />
    </>
  );
}