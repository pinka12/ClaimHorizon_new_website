import LegalDocument from "./LegalDocument";
import text from "./content/terms-and-conditions.txt?raw";

export default function TermsAndConditions() {
  return (
    <LegalDocument
      text={text}
      title="Terms & Conditions"
      description="Read the Terms and Conditions governing your access to and use of ClaimHorizon applications, dashboards, website and related services."
    />
  );
}
