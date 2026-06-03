import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Ungültige Anfrage." }, { status: 400 });
  }

  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!firstName || !lastName || !emailPattern.test(email) || message.length < 10) {
    return NextResponse.json(
      { error: "Bitte füllen Sie alle Felder korrekt aus." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "info@toleo.biz";
  const from = process.env.CONTACT_FROM_EMAIL ?? "kontakt@toleo.biz";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Der Mailversand ist noch nicht konfiguriert." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const fullName = `${firstName} ${lastName}`;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${fullName}`,
      text: [
        `Name: ${fullName}`,
        `E-Mail: ${email}`,
        "",
        "Nachricht:",
        message
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6">
          <h2>Neue Kontaktanfrage über toleo.biz</h2>
          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>E-Mail:</strong> ${escapeHtml(email)}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Die Nachricht konnte nicht gesendet werden." },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
