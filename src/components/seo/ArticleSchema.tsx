import { seoConfig } from "@/config/seo";
import JsonLd from "@/components/seo/JsonLd";

export interface ArticleSchemaData {
  headline: string;
  description?: string;
  url: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

interface ArticleSchemaProps {
  data: ArticleSchemaData;
}

/**
 * Article JSON-LD for Ask Abe question pages.
 * References the business entity as publisher and Abe Hakawati as author.
 */
export default function ArticleSchema({ data }: ArticleSchemaProps) {
  const { person, business } = seoConfig;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${data.url}#article`,
    headline: data.headline,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
    author: {
      "@id": `${person.url}#person`,
    },
    publisher: {
      "@id": `${business.url}/#organization`,
    },
  };

  if (data.description) {
    schema.description = data.description;
  }

  if (data.image) {
    schema.image = data.image;
  }

  if (data.datePublished) {
    schema.datePublished = data.datePublished;
  }

  if (data.dateModified) {
    schema.dateModified = data.dateModified;
  }

  return <JsonLd data={schema} />;
}
