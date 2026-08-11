import { NextResponse } from "next/server";

const LEADCONNECTOR_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/Lv5oqPcJ6MZsszgssznB/webhook-trigger/06b16e8e-2170-41ad-b9db-9abe698e270c";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const phone = body.phone?.trim();
    const message = body.message?.trim();

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 },
      );
    }

    const webhookResponse = await fetch(LEADCONNECTOR_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        source: "Talk2Abe Contact Form",
      }),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      const errorText = await webhookResponse.text();

      console.error("LeadConnector webhook error:", {
        status: webhookResponse.status,
        response: errorText,
      });

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 },
    );
  }
}
