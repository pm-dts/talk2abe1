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
      className="
    inline-flex
    w-full
    items-center
    justify-center
    gap-3
    rounded-2xl
    bg-brand
    px-6
    py-4
    text-lg
    font-semibold
    text-white
    shadow-sm
    transition-all
    hover:bg-brand-dark
    hover:shadow-md
    focus:outline-none
    focus:ring-2
    focus:ring-brand/30
    sm:text-xl
  "
    >
      <span>Start My Conversation</span>

      <ArrowRight className="h-6 w-6" aria-hidden="true" />
    </button>
  );
}
