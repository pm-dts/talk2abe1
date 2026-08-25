import { seoConfig } from "@/config/seo";
import JsonLd from "@/components/seo/JsonLd";

/**
 * FinancialService / MortgageBroker JSON-LD structured data.
 * Uses the verified business information from the project.
 */
export default function BusinessSchema() {
  const { business } = seoConfig;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    additionalType: "https://schema.org/MortgageBroker",
    "@id": `${business.url}/#organization`,
    name: business.name,
    legalName: business.legalName,
    url: business.url,
    logo: business.logo,
    image: business.logo,
    telephone: business.telephone,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      ...business.address,
    },
    identifier: [
      {
        "@type": "PropertyValue",
        name: "NMLS Individual",
        value: business.nmlsIndividual,
      },
      ...business.nmlsCompany.map((nmls) => ({
        "@type": "PropertyValue" as const,
        name: "NMLS Company",
        value: nmls,
      })),
    ],
    areaServed: business.areaServed.map((area) => ({
      "@type": "State",
      name: area,
    })),
    sameAs: [
      "https://www.youtube.com/@MyLoanDeskMortgage",
    ],
  };

  return <JsonLd data={schema} />;
}
