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
      <main className="pt-16 md:pt-24 lg:pt-28">
        <Policy {...cancellationRefundPolicyData} />
      </main>
      <Footer {...WebfooterData} />
    </>
  );
};

export default CancellationRefundPolicyPage;
