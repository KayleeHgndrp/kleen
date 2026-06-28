"use client";

import { useState } from "react";
import { telHref, waHref, phoneDisplay } from "@/lib/data";
import { Check } from "./Icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div style={{ background: "#fff", color: "var(--ink)", borderRadius: 20, padding: 28 }}>
      {!sent ? (
        <form onSubmit={submitForm}>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: ".3px", color: "var(--petrol)", marginBottom: 4 }}>
            Vraag je proefles aan
          </div>
          <p style={{ color: "var(--ink-soft)", fontSize: 13, marginBottom: 20 }}>
            Vul je gegevens in, dan plannen we samen een moment.
          </p>

          <label style={labelStyle}>Naam</label>
          <input type="text" required placeholder="Je naam" className="k-field" style={fieldStyle} />

          <label style={labelStyle}>Telefoonnummer</label>
          <input type="tel" required placeholder="06 ..." className="k-field" style={fieldStyle} />

          <label style={labelStyle}>Welke opleiding?</label>
          <select className="k-field" style={fieldStyle} defaultValue="Autorijles (schakel)">
            <option>Autorijles (schakel)</option>
            <option>Rijbewijs B automaat</option>
            <option>Spoedcursus</option>
            <option>Faalangsttraining</option>
            <option>Weet ik nog niet</option>
          </select>

          <label style={labelStyle}>Bericht (optioneel)</label>
          <textarea
            rows={3}
            placeholder="Heb je een voorkeur voor dagen/tijden?"
            className="k-field"
            style={{ ...fieldStyle, resize: "vertical", marginBottom: 18 }}
          />

          <button
            type="submit"
            className="k-pill"
            style={{ width: "100%", background: "var(--petrol)", color: "#fff", border: "none", fontWeight: 800, fontSize: 16, padding: 16, cursor: "pointer", fontFamily: "inherit" }}
          >
            Verstuur aanvraag
          </button>
          <p style={{ textAlign: "center", fontSize: 12, color: "var(--ink-soft)", marginTop: 12 }}>
            Of bel direct:{" "}
            <a href={telHref} style={{ color: "var(--teal-2)", fontWeight: 700, textDecoration: "none" }}>
              {phoneDisplay}
            </a>
          </p>
        </form>
      ) : (
        <div style={{ textAlign: "center", padding: "30px 6px" }}>
          <span style={{ display: "inline-grid", placeItems: "center", width: 64, height: 64, borderRadius: "50%", background: "#e8f4f5", marginBottom: 16 }}>
            <Check size={30} stroke="var(--teal-2)" width={2.6} />
          </span>
          <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, color: "var(--petrol)", marginBottom: 8 }}>
            Aanvraag verstuurd!
          </div>
          <p style={{ color: "#46555c", fontSize: 15, lineHeight: 1.6, maxWidth: 320, margin: "0 auto 20px" }}>
            Bedankt — we nemen snel contact met je op om je proefles in te plannen. Liever meteen schakelen?
          </p>
          <a
            href={waHref}
            className="k-pill"
            style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 15, padding: "13px 22px" }}
          >
            App ons op WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "#46555c",
  marginBottom: 6,
};

const fieldStyle: React.CSSProperties = {
  width: "100%",
  background: "var(--tint)",
  border: "1px solid #d9e7e8",
  borderRadius: 11,
  padding: "13px 14px",
  color: "var(--ink)",
  fontSize: 15,
  fontFamily: "inherit",
  marginBottom: 14,
  outline: "none",
};
