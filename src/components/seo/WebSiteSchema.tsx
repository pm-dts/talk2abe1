import JsonLd from "@/components/seo/JsonLd";
import { seoConfig } from "@/config/seo";

export default function WebSiteSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${seoConfig.siteUrl}/#website`,
        url: seoConfig.siteUrl,
        name: seoConfig.siteName,
        description: seoConfig.defaultDescription,
        publisher: { "@id": `${seoConfig.siteUrl}/#organization` },
      }}
    />
  );
}
