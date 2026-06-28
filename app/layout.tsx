import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rijbewijs halen in Bergen op Zoom | KLEEN Instructions Autorijschool",
  description:
    "Autorijles in Bergen op Zoom en omgeving bij KLEEN Instructions. Persoonlijke training & coaching in rijvaardigheid. 92% slaagt in één keer. Begin met een proefles. Bel of app direct.",
  keywords:
    "autorijles Bergen op Zoom, rijschool Bergen op Zoom, rijbewijs B halen, automaat rijles, spoedcursus auto, faalangst rijexamen",
  robots: "index,follow",
  other: {
    "geo.region": "NL-NB",
    "geo.placename": "Bergen op Zoom",
  },
  openGraph: {
    type: "website",
    title: "Autorijles in Bergen op Zoom | KLEEN Instructions",
    description:
      "Training & coaching in rijvaardigheid. 92% slaagt in één keer. Persoonlijke begeleiding in Bergen op Zoom e.o.",
    locale: "nl_NL",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  name: "KLEEN Instructions",
  description:
    "Autorijschool in Bergen op Zoom. Training & coaching in rijvaardigheid voor rijbewijs B, automaat, BE en spoedcursus.",
  telephone: "+31612345678",
  priceRange: "€€",
  areaServed: ["Bergen op Zoom", "Roosendaal", "Halsteren", "Steenbergen", "Tholen", "Woensdrecht"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bergen op Zoom",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "9.4",
    bestRating: "10",
    reviewCount: "120",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Mulish:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
