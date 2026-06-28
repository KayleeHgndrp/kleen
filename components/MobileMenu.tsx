"use client";

import { useState } from "react";
import { ArrowRight } from "@/components/Icons";

const links: [string, string][] = [
  ["#aanbod", "Aanbod"],
  ["#waarom", "Waarom KLEEN"],
  ["#tarieven", "Pakketten"],
  ["#reviews", "Reviews"],
  ["#faq", "FAQ"],
];

/** Mobile-only hamburger menu. Rendered next to the logo on small screens
 *  (the desktop nav + header CTA are hidden below the 880px breakpoint). */
export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="k-mobile-menu" style={{ position: "relative" }}>
      <button
        type="button"
        aria-label={open ? "Menu sluiten" : "Menu openen"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 44, height: 44, borderRadius: 12, flex: "none",
          border: "1px solid #e9eff0", background: "#fff", cursor: "pointer",
        }}
      >
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--petrol)" strokeWidth={2.4} strokeLinecap="round">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            style={{ position: "fixed", inset: 0, zIndex: 55, background: "transparent" }}
          />
          <div
            style={{
              position: "absolute", right: 0, top: "calc(100% + 10px)", zIndex: 56,
              background: "#fff", border: "1px solid #e9eff0", borderRadius: 16,
              boxShadow: "0 16px 38px rgba(8,42,49,.16)", padding: 10,
              display: "flex", flexDirection: "column", gap: 2, minWidth: 230,
            }}
          >
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                style={{ textDecoration: "none", fontWeight: 700, fontSize: 15, color: "var(--petrol)", padding: "12px 14px", borderRadius: 10 }}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="k-pill"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, marginTop: 6, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 15, padding: "13px 18px" }}
            >
              Proefles aanvragen <ArrowRight size={15} />
            </a>
          </div>
        </>
      )}
    </div>
  );
}
