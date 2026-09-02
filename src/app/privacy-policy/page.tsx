import { Metadata } from "next";

import { privacyPolicyData } from "./pageData";
import Privacy from "./component/Privacy";
import Navbar from "@/components/navbar/navbar";
import { SectionWithContainer } from "@/components/sectionComponants";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export const metadata: Metadata = {
  title: "Privacy Policy | Aroha Palms",
  description:
    "Read the Privacy Policy for Aroha Palms Luxury Villas.",
};

const PrivacyPolicyPage = () => {
   return (
      <>
      <Navbar/>
      <SectionWithContainer>
        <Privacy {...privacyPolicyData} />
      </SectionWithContainer>
      <Footer {...WebfooterData}/>
      </>
    );
};

export default PrivacyPolicyPage;