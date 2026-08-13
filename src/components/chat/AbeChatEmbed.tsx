"use client";

import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

const GHL_SCRIPT_URL = "https://widgets.leadconnectorhq.com/loader.js";

const GHL_RESOURCES_URL =
  "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

const GHL_WIDGET_ID = "6a7e0e9a4da851c453c2a740";

type AbeChatEmbedProps = {
  className?: string;
};

export default function AbeChatEmbed({ className }: AbeChatEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    // Prevent duplicate GHL initialization.
    if (container.querySelector("script[data-ghl-chat-widget='true']")) {
      return;
    }

    const script = document.createElement("script");

    script.src = GHL_SCRIPT_URL;
    script.async = true;

    script.setAttribute("data-resources-url", GHL_RESOURCES_URL);

    script.setAttribute("data-widget-id", GHL_WIDGET_ID);

    script.setAttribute("data-ghl-chat-widget", "true");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full min-h-0 w-full bg-white", className)}
    />
  );
}
