"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import BookingWidget from "@/components/common/BookingWidget";
import Button from "@/components/common/Button";

import { trackEvent } from "@/lib/analytics";

import type { ComponentProps, MouseEvent } from "react";

type ScheduleCallButtonProps = Omit<
  ComponentProps<typeof Button>,
  "href"
>;

export default function ScheduleCallButton({
  children,
  onClick,
  ...props
}: ScheduleCallButtonProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);

    trackEvent("schedule_call_clicked");

    setOpen(true);
  };

  return (
    <>
      <Button {...props} onClick={handleClick}>
        {children ?? t("common.scheduleACall")}
      </Button>

      <BookingWidget open={open} onClose={() => setOpen(false)} />
    </>
  );
}
