/**
 * Produces a concise, page-specific meta description without changing the
 * editorial answer shown on the page. Search snippets are typically most
 * useful when the description stays focused and avoids abrupt mid-word cuts.
 */
export function createMetaDescription(
  preferred: string | undefined,
  fallback: string,
  maxLength = 160,
): string {
  const source = (preferred ?? fallback).replace(/\s+/g, " ").trim();

  if (source.length <= maxLength) return source;

  const sentence = source.slice(0, maxLength + 1).match(/^(.+?[.!?])(?:\s|$)/);
  if (sentence?.[1] && sentence[1].length >= 70) return sentence[1];

  const cutoff = source.lastIndexOf(" ", maxLength - 1);
  return `${source.slice(0, cutoff > 40 ? cutoff : maxLength - 1).trimEnd()}…`;
}
