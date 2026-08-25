export const SITE_URL = "https://talk2abe.com".replace(/\/$/, "");

export const seoImages = {
  default: `${SITE_URL}/images/abe/abe-hero.png`,
  home: `${SITE_URL}/images/abe/abe-hero.png`,
  about: `${SITE_URL}/images/abe/abe-about.png`,
  askAbe: `${SITE_URL}/images/abe/abe-hero.png`,
  question: `${SITE_URL}/images/abe/abe-hero.png`,
  loanProgram: `${SITE_URL}/images/abe/abe-hero.png`,
} as const;

export const seoConfig = {
  siteName: "Talk2Abe",
  siteUrl: SITE_URL,
  defaultTitle: "Talk2Abe | Straightforward Mortgage Answers from Abe",
  defaultDescription:
    "Straightforward mortgage answers from Abe Hakawati. Explore loan programs, get personalized guidance, and find the right financing for your situation.",
  defaultOgImage: `${SITE_URL}/images/abe/abe-hero.png`,
  twitterHandle: "",
  business: {
    name: "Talk2Abe",
    legalName: "Secured Horizon Financial Group, Inc. / Secured Horizon Mortgage Group, Inc.",
    url: SITE_URL,
    telephone: "(305) 891-6500",
    email: "abe@talk2abe.com",
    address: {
      streetAddress: "1801 NE 123rd St, Suite 314",
      addressLocality: "North Miami",
      addressRegion: "FL",
      postalCode: "33181",
      addressCountry: "US",
    },
    nmlsIndividual: "341393",
    nmlsCompany: ["314226", "1444825"],
    areaServed: ["Florida", "Texas", "California"],
    logo: `${SITE_URL}/images/abe/abe-hero.png`,
  } as const,
  person: {
    name: "Abe Hakawati",
    jobTitle: "Licensed Mortgage Professional",
    nmls: "341393",
    url: `${SITE_URL}/about-abe/`,
    image: `${SITE_URL}/images/abe/abe-hakawati-new.png`,
  } as const,
} as const;

export type SeoConfig = typeof seoConfig;
