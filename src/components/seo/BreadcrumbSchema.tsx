import { getCanonicalUrl } from "@/lib/urls";
import JsonLd from "@/components/seo/JsonLd";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

/**
 * BreadcrumbList JSON-LD structured data.
 * Excludes the homepage; expects items with absolute URLs.
 */
export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
}

/**
 * Helper: build breadcrumbs for a given route path.
 * Returns structured items with absolute URLs for JSON-LD.
 */
export function buildBreadcrumbs(
  segments: { name: string; path: string }[],
): BreadcrumbItem[] {
  return segments.map((segment) => ({
    name: segment.name,
    url: getCanonicalUrl(segment.path),
  }));
}
