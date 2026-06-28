# KLEEN Instructions — Autorijschool Bergen op Zoom

A Next.js implementation of the **KLEEN Instructions** driving-school landing page,
recreated from the Claude Design handoff bundle (`project/KLEEN Instructions.dc.html`).

It's a mobile-first one-pager following the rijschoolcaland.nl layout/flow, styled in
the KLEEN petrol/teal identity (Barlow Condensed + Mulish, steering-wheel mark), in Dutch.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Fonts via Google Fonts (Barlow Condensed + Mulish)
- Styling via inline styles + `app/globals.css` (CSS custom properties for the
  petrol/teal palette, responsive breakpoint at 880px, hover/focus states)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Structure

| Path | Purpose |
| --- | --- |
| `app/layout.tsx` | `<head>` metadata, fonts, JSON-LD `DrivingSchool` structured data |
| `app/page.tsx` | Full landing page (trust bar, hero, aanbod, waarom, pakketten, reviews, werkgebied, FAQ, contact, footer, sticky mobile CTA) |
| `app/globals.css` | Palette variables, responsive rules, interactive states |
| `components/ContactForm.tsx` | Proefles request form with client-side "sent" success state |
| `components/Icons.tsx` | Reusable inline SVGs (steering wheel, phone, WhatsApp, etc.) |
| `lib/data.ts` | Content/data layer ported from the design's `renderVals()` |
| `public/uploads/` | Dummy images used in the aanbod cards and werkgebied photo |

## Notes / placeholders

The original design uses placeholder business data — these are intentional and should be
replaced with real values before going live:

- Phone number `06 1234 5678` / `+31612345678` (used in `tel:` and WhatsApp links)
- Address ("[adres volgt]"), KvK and BTW numbers in the footer
- The contact map area ("[ adres + kaart volgt ]")
- Review names/quotes and the 92% / 9,4 / 120+ trust figures
- The accent colour is Teal by default; `lib/data.ts` keeps the original palette map
  (Teal / Lime / Amber / Koraal / Sky) used by the design's accent prop.
