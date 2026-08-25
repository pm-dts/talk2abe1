import { seoConfig } from "@/config/seo";
import JsonLd from "@/components/seo/JsonLd";

/**
 * Person JSON-LD for Abe Hakawati.
 * Links to the business entity via worksFor.
 */
export default function PersonSchema() {
  const { person, business } = seoConfig;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${person.url}#person`,
    name: person.name,
    jobTitle: person.jobTitle,
    url: person.url,
    image: person.image,
    identifier: {
      "@type": "PropertyValue",
      name: "NMLS",
      value: person.nmls,
    },
    worksFor: {
      "@id": `${business.url}/#organization`,
    },
  };

  return <JsonLd data={schema} />;
}
