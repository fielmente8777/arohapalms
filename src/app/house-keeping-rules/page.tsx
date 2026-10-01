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
      <Navbar />
      <main className="pt-16 md:pt-24 lg:pt-28">
        <HouseKeepingRules {...houseKeepingRulesData} />
      </main>
      <Footer {...WebfooterData} />
    </>
  );
};

export default HouseKeepingRulesPage;
