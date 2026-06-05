import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  company?: string;
  locale?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const maxNameLength = 80;
const maxEmailLength = 160;
const maxMessageLength = 3000;

const messages = {
  de: {
    invalidRequest: "Ungültige Anfrage.",
    invalidFields: "Bitte füllen Sie alle Felder korrekt aus.",
    missingMailConfig: "Der Mailversand ist noch nicht konfiguriert.",
    sendFailed: "Die Nachricht konnte nicht gesendet werden.",
    subjectPrefix: "Neue Kontaktanfrage von",
    emailHeading: "Neue Kontaktanfrage über toleo.biz",
    nameLabel: "Name",
    emailLabel: "E-Mail",
    messageLabel: "Nachricht"
  },
  en: {
    invalidRequest: "Invalid request.",
    invalidFields: "Please fill in all fields correctly.",
    missingMailConfig: "Email delivery is not configured yet.",
    sendFailed: "The message could not be sent.",
    subjectPrefix: "New contact request from",
    emailHeading: "New contact request via toleo.biz",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message"
  }
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    const body = await request.json();
    payload = isRecord(body) ? (body as ContactPayload) : {};
  } catch {
    return NextResponse.json({ error: messages.de.invalidRequest }, { status: 400 });
  }

  const locale = payload.locale === "en" ? "en" : "de";
  const copy = messages[locale];
  const firstName = getField(payload.firstName);
  const lastName = getField(payload.lastName);
  const email = getField(payload.email);
  const message = getField(payload.message);
  const company = getField(payload.company);

  if (company) {
    return NextResponse.json({ ok: true });
  }

  if (
    !firstName ||
    !lastName ||
    firstName.length > maxNameLength ||
    lastName.length > maxNameLength ||
    email.length > maxEmailLength ||
    !emailPattern.test(email) ||
    message.length < 10 ||
    message.length > maxMessageLength
  ) {
    return NextResponse.json(
      { error: copy.invalidFields },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "hrumscheidt@toleo.biz";
  const from = process.env.CONTACT_FROM_EMAIL ?? "tickets@lws98.de";

  if (!apiKey) {
    return NextResponse.json(
      { error: copy.missingMailConfig },
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
      subject: `${copy.subjectPrefix} ${fullName}`,
      text: [
        `${copy.nameLabel}: ${fullName}`,
        `${copy.emailLabel}: ${email}`,
        "",
        `${copy.messageLabel}:`,
        message
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;color:#111;line-height:1.6">
          <h2>${escapeHtml(copy.emailHeading)}</h2>
          <p><strong>${escapeHtml(copy.nameLabel)}:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>${escapeHtml(copy.emailLabel)}:</strong> ${escapeHtml(email)}</p>
          <p><strong>${escapeHtml(copy.messageLabel)}:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: copy.sendFailed },
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

function getField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
