"use client";

import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

type StartAbeConversationButtonProps = {
  className?: string;
};

export default function StartAbeConversationButton({
  className,
}: StartAbeConversationButtonProps) {
  const openChat = () => {
    const selectors = [
      "#chat-widget-container button",
      "#chat-widget button",
      "chat-widget button",
      ".hl_chat-widget button",
      "[data-widget-id='6a7e0e9a4da851c453c2a740'] button",
    ];

    for (const selector of selectors) {
      const trigger = document.querySelector<HTMLElement>(selector);
      if (trigger) {
        trigger.click();
        return;
      }
    }

    const widget = document.querySelector<HTMLElement>("chat-widget");
    const shadowTrigger = widget?.shadowRoot?.querySelector<HTMLElement>(
      "button, [role='button']",
    );

    shadowTrigger?.click();
    window.dispatchEvent(new CustomEvent("open-abe-chat"));
  };

  return (
    <button
      type="button"
      onClick={openChat}
      className={cn(
        "group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand px-6 py-5 text-[17px] font-bold text-white shadow-[0_10px_25px_rgba(47,143,82,0.16)] transition duration-200 hover:bg-brand-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20 sm:w-auto sm:min-w-[320px]",
        className,
      )}
    >
      Start My Conversation
      <ArrowRight
        className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1"
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}
