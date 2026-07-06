"use client";

import { type FormEvent, useState } from "react";
import { AlertCircle, CheckCircle2, Mail, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BrandDots, SectionTitle } from "@/components/ui";
import type { Locale, SiteContent } from "@/lib/site-content";

type ContactStatus = "idle" | "loading" | "success" | "error";

type ContactSectionProps = {
  content: SiteContent["contact"];
  locale: Locale;
};

export function ContactSection({ content, locale }: ContactSectionProps) {
  const [status, setStatus]               = useState<ContactStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const isSubmitting                      = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName:  String(formData.get("lastName")  ?? ""),
      email:     String(formData.get("email")     ?? ""),
      message:   String(formData.get("message")   ?? ""),
      company:   String(formData.get("company")   ?? ""),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? content.error);
      }

      form.reset();
      setStatus("success");
      setStatusMessage(content.success);
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : content.error
      );
    }
  }

  return (
    <section className="section contact-section" id="kontakt">
      <div className="section-inner">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-grid">

              {/* LEFT — info */}
              <div>
                <p className="section-kicker">{content.kicker}</p>
                <SectionTitle title={content.title} tone="blue" className="contact-heading" />

                <div className="contact-links">
                  <a href="mailto:info@toleo.biz">
                    <Mail size={17} aria-hidden="true" />
                    info@toleo.biz
                  </a>
                  <span>
                    <MapPin size={17} aria-hidden="true" />
                    Ritter-Hilprand-Str. 9, 82024 Taufkirchen
                  </span>
                </div>

                <div className="contact-signature">
                  <BrandDots mode="signature" size={10} />
                </div>
              </div>

              {/* RIGHT — form */}
              <form
                className="contact-form"
                onSubmit={handleSubmit}
                aria-busy={isSubmitting}
                aria-describedby="contact-status"
              >
                <div className="form-row">
                  <label>
                    {content.labels.firstName}
                    <input
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      maxLength={80}
                      required
                    />
                  </label>
                  <label>
                    {content.labels.lastName}
                    <input
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      maxLength={80}
                      required
                    />
                  </label>
                </div>

                <label>
                  {content.labels.email}
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    required
                  />
                </label>

                <label>
                  {content.labels.message}
                  <textarea
                    name="message"
                    rows={5}
                    minLength={10}
                    maxLength={3000}
                    required
                  />
                </label>

                <div className="form-honey" aria-hidden="true">
                  <label>
                    {content.labels.company}
                    <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  <Send size={17} aria-hidden="true" />
                  {isSubmitting ? content.sending : content.button}
                </button>

                <p
                  id="contact-status"
                  className={`form-status ${status}`}
                  aria-live="polite"
                >
                  {status === "success" && <CheckCircle2 size={18} aria-hidden="true" />}
                  {status === "error" && <AlertCircle size={18} aria-hidden="true" />}
                  {statusMessage && <span>{statusMessage}</span>}
                </p>
              </form>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
