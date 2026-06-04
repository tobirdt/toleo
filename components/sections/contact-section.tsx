"use client";

import { type FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { BrandDots } from "@/components/ui";

type ContactStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus]               = useState<ContactStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const isSubmitting                      = status === "loading";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName:  String(formData.get("lastName")  ?? ""),
      email:     String(formData.get("email")     ?? ""),
      message:   String(formData.get("message")   ?? ""),
      company:   String(formData.get("company")   ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Die Nachricht konnte nicht gesendet werden.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setStatusMessage("Danke für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Die Nachricht konnte nicht gesendet werden."
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
                <p className="section-kicker">Kontakt</p>
                <h2 className="contact-heading">
                  Starten wir ein Gespräch über Markt, Struktur und Wachstum.
                </h2>

                <div className="contact-links">
                  <a href="mailto:info@toleo.biz">
                    <Mail size={17} aria-hidden="true" />
                    info@toleo.biz
                  </a>
                  <a href="tel:+491702208778">
                    <Phone size={17} aria-hidden="true" />
                    +49 (170) 22 08 778
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
                    Vorname
                    <input
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      maxLength={80}
                      required
                    />
                  </label>
                  <label>
                    Nachname
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
                  E-Mail-Adresse
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    required
                  />
                </label>

                <label>
                  Nachricht
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
                    Firma
                    <input name="company" type="text" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <button type="submit" disabled={isSubmitting}>
                  <Send size={17} aria-hidden="true" />
                  {isSubmitting ? "Wird gesendet…" : "Nachricht senden"}
                </button>

                <p
                  id="contact-status"
                  className={`form-status ${status}`}
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              </form>

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
