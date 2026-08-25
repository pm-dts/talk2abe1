import JsonLd from "@/components/seo/JsonLd";
import { seoConfig } from "@/config/seo";

type WebPageSchemaProps = {
  name: string;
  description: string;
  url: string;
};

export default function WebPageSchema({ name, description, url }: WebPageSchemaProps) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": url,
        url,
        name,
        description,
        isPartOf: { "@id": `${seoConfig.siteUrl}/#website` },
        about: { "@id": `${seoConfig.siteUrl}/#organization` },
      }}
    />
  );
}
