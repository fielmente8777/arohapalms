import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

import TermsConditions from "./components/TermsConditions";
import { termsConditionsData } from "./pageData";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <TermsConditions {...termsConditionsData} />
      <Footer {...WebfooterData} />
    </>
  );
}