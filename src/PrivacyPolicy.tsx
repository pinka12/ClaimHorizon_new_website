import LegalDocument from "./LegalDocument";
import text from "./content/privacy-policy.txt?raw";

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      text={text}
      title="Privacy Policy"
      description="Read how ClaimHorizon Pvt. Ltd. collects, uses, stores, shares and protects information across its applications, website and services."
    />
  );
}
