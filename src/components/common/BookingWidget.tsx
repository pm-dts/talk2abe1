"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { X } from "lucide-react";

const BOOKING_IFRAME_URL =
  process.env.NEXT_PUBLIC_BOOKING_IFRAME_URL as string;

const BOOKING_EMBED_SCRIPT_URL = "https://link.msgsndr.com/js/form_embed.js";

type BookingWidgetProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingWidget({
  open,
  onClose,
}: BookingWidgetProps) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      return;
    }

    if (document.getElementById("msgsndr-form-embed-script")) {
      return;
    }

    const script = document.createElement("script");

    script.id = "msgsndr-form-embed-script";
    script.src = BOOKING_EMBED_SCRIPT_URL;
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative flex max-h-full w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
          <span className="text-sm font-semibold text-navy">
            {t("common.scheduleACallWithAbe")}
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label={t("common.closeBookingWidget")}
            className="rounded-md p-1.5 text-muted transition-colors hover:bg-surface hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <iframe
          src={BOOKING_IFRAME_URL}
          allow="payment"
          scrolling="no"
          className="h-[70vh] w-full border-none sm:h-[75vh]"
        />
      </div>
    </div>
  );
}
