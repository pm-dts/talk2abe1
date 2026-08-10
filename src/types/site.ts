export interface SiteConfig {
  name: string;
  tagline: string[];
  contact: SiteContact;
  socialLinks: SocialLink[];
}

export interface SiteContact {
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  serviceArea: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
}
