import { Metadata } from "next";

import { cancellationRefundPolicyData } from "./pageData";
import Policy from "./component/Policy";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/WebsiteFooter";
import { WebfooterData } from "@/components/footer/footerdata";

export const metadata: Metadata = {
  title: "Cancellation & Refund Policy | Aroha Palms",
  description:
    "Read the cancellation and refund policy for bookings at Aroha Palms.",
};

const CancellationRefundPolicyPage = () => {
  return (
    <>
      <Navbar />
      <Policy {...cancellationRefundPolicyData} />
      <Footer {...WebfooterData} />
    </>
  );
};

export default CancellationRefundPolicyPage;
