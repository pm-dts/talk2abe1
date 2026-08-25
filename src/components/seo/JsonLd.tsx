interface JsonLdProps {
  /** A single JSON-LD object or an array of objects. */
  data: Record<string, unknown> | Record<string, unknown>[];
}

/**
 * Renders a safe, server-side JSON-LD script tag.
 * Uses dangerouslySetInnerHTML only on trusted, build-time-generated JSON.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const items = Array.isArray(data) ? data : [data];

  return (
    <>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
