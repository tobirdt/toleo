"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

type ContactStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? "")
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
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
        error instanceof Error ? error.message : "Die Nachricht konnte nicht gesendet werden."
      );
    }
  }

  return (
    <section className="section contact-section" id="kontakt">
      <div className="section-inner contact-grid">
        <Reveal>
          <div>
            <p className="section-kicker">Kontakt</p>
            <h2>Starten wir ein Gespräch über Markt, Struktur und Wachstum.</h2>
            <div className="contact-links">
              <a href="mailto:info@toleo.biz">
                <Mail size={18} aria-hidden="true" />
                info@toleo.biz
              </a>
              <a href="tel:+491702208778">
                <Phone size={18} aria-hidden="true" />
                +49 (170) 22 08 778
              </a>
              <span>
                <MapPin size={18} aria-hidden="true" />
                Ritter-Hilprand Str. 9, 82024 Taufkirchen
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                Vorname
                <input name="firstName" type="text" autoComplete="given-name" required />
              </label>
              <label>
                Nachname
                <input name="lastName" type="text" autoComplete="family-name" required />
              </label>
            </div>
            <label>
              E-Mail-Adresse
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Nachricht
              <textarea name="message" rows={5} minLength={10} required />
            </label>
            <button type="submit" disabled={status === "loading"}>
              <Send size={18} aria-hidden="true" />
              {status === "loading" ? "Wird gesendet..." : "Senden"}
            </button>
            <p className={`form-status ${status}`} aria-live="polite">
              {statusMessage}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
