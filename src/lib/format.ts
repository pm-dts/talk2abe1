import i18n from "@/i18n/config";

const LOCALE_MAP: Record<string, string> = {
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  ru: "ru-RU",
  pt: "pt-BR",
  it: "it-IT",
  ar: "ar",
};

function getLocaleString(): string {
  const lang = i18n.language || "en";
  return LOCALE_MAP[lang] || "en-US";
}

export function formatLocalizedCurrency(value: number, digits = 0): string {
  return value.toLocaleString(getLocaleString(), {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

export function formatLocalizedNumber(value: number, digits = 0): string {
  return value.toLocaleString(getLocaleString(), {
    maximumFractionDigits: digits,
    minimumFractionDigits: digits,
  });
}

export function formatLocalizedPercent(value: number, digits = 1): string {
  return value.toLocaleString(getLocaleString(), {
    style: "percent",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

export function formatLocalizedDate(value: string): string {
  const [year, month, day] = value.split("-").map(Number);
  if (!year || !month || !day) return value;
  return new Intl.DateTimeFormat(getLocaleString(), {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
}
