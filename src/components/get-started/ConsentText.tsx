"use client";

import { useTranslation } from "react-i18next";

export default function ConsentText() {
  const { t } = useTranslation();

  return (
    <p className="text-center text-xs leading-relaxed text-muted">
      {t("getStarted.consent.body")}
    </p>
  );
}
