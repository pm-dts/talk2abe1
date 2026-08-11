import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Talk2Abe",
  tagline: [
    "Straightforward answers.",
    "Real solutions.",
    "Personal service.",
  ],
  contact: {
    phone: "(305) 891-6500",
    phoneHref: "tel:+13058916500",
    email: "abe@talk2abe.com",
    emailHref: "mailto:abe@talk2abe.com",
    serviceArea: "Serving FL, TX & CA",
  },
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    {
      label: "YouTube",
      href: "https://www.youtube.com/channel/UC4cB9D-DuLq2EU3c7nwANSw",
    },
  ],
};
