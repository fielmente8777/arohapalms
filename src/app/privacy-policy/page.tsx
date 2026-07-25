import { Metadata } from "next";

import { privacyPolicyData } from "./pageData";
import Privacy from "./component/Privacy";

export const metadata: Metadata = {
  title: "Privacy Policy | Aroha Palms",
  description:
    "Read the Privacy Policy for Aroha Palms Luxury Villas.",
};

const PrivacyPolicyPage = () => {
  return <Privacy {...privacyPolicyData} />;
};

export default PrivacyPolicyPage;