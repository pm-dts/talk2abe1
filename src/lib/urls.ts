import { SITE_URL } from "@/config/seo";

/**
 * Build a canonical URL for the given pathname.
 * Normalizes slashes and appends a trailing slash (matching next.config trailingSlash: true).
 */
export function getCanonicalUrl(pathname: string): string {
  const normalized = pathname.replace(/\/\/+/g, "/").replace(/\/+$/, "");
  if (!normalized || normalized === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${normalized}/`;
}

/**
 * Build an absolute URL for Open Graph and structured data.
 */
export function getAbsoluteUrl(pathname: string): string {
  return getCanonicalUrl(pathname);
}
