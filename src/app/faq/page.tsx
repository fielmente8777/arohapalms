import { faqData } from "./pageData";
import FAQSection from "./components/FaoSection";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export default function FAQPage() {
  return (
    <>
    <Navbar/>
    <main>
      <FAQSection {...faqData} />
    </main>

    <Footer {...WebfooterData}/>

    </>
  );
}
