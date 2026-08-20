"use client";

import { useEffect } from "react";

const GHL_SCRIPT_URL = "https://widgets.leadconnectorhq.com/loader.js";

const GHL_RESOURCES_URL =
  "https://widgets.leadconnectorhq.com/chat-widget/loader.js";

const GHL_WIDGET_ID = "6a7e0e9a4da851c453c2a740";

export default function AbeChatEmbed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      `script[data-ghl-widget-id="${GHL_WIDGET_ID}"]`,
    );

    if (existingScript) {
      return;
    }

    const script = document.createElement("script");

    script.src = GHL_SCRIPT_URL;
    script.async = true;

    script.setAttribute("data-resources-url", GHL_RESOURCES_URL);

    script.setAttribute("data-widget-id", GHL_WIDGET_ID);

    script.setAttribute("data-ghl-widget-id", GHL_WIDGET_ID);

    document.body.appendChild(script);
  }, []);

  return null;
}
