import { Metadata } from "next";
import { SectionWithContainer } from "@/components/sectionComponants";
import HouseKeepingRules from "./component/House";
import { houseKeepingRulesData } from "./pageData";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export const metadata: Metadata = {
  title: "House Keeping Rules | Aroha Palms",
  description:
    "Read the housekeeping rules and guest guidelines for your stay at Aroha Palms.",
};

const HouseKeepingRulesPage = () => {
  return (
    <>
    <Navbar/>
    <SectionWithContainer>
      <HouseKeepingRules {...houseKeepingRulesData} />
    </SectionWithContainer>
    <Footer {...WebfooterData}/>
    </>
  );
};

export default HouseKeepingRulesPage;
