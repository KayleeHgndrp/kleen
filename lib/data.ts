// Data layer ported from the KLEEN Instructions design (renderVals()).
// All copy is Dutch, informal-professional, matching the original prototype.

// ---- Site-wide / contact config -------------------------------------------

export const phoneDisplay = "06 1234 5678";
export const telHref = "tel:+31612345678";
export const waHref =
  "https://wa.me/31612345678?text=" +
  encodeURIComponent("Hoi Danny! Ik wil graag autorijles en een proefles inplannen.");

export const slaag = "92%";
export const score = "9,4";
export const reviewCount = "120+";

// ---- Accent palette --------------------------------------------------------
// The design exposed `accent` as a tweakable prop. Teal is the default; the
// full map is kept so the highlight colour can be re-themed in one place.

export type AccentName = "Teal" | "Lime" | "Amber" | "Koraal" | "Sky";

export const accentMap: Record<AccentName, [string, string]> = {
  Teal: ["#5cc0cd", "#2c8f9d"],
  Lime: ["#7ed957", "#4a9e2f"],
  Amber: ["#ffc02e", "#c8901a"],
  Koraal: ["#ff7a59", "#d4502f"],
  Sky: ["#4aa8ff", "#2a73c8"],
};

export const defaultAccent: AccentName = "Teal";

// ---- Content collections ---------------------------------------------------

export const usps = [
  "Ervaren instructeur",
  "Persoonlijke aanpak",
  "Flexibele lestijden",
  "92% slaagt in 1x",
];

export interface Tile {
  label: string;
  sub: string;
  icon: string;
}

export const tiles: Tile[] = [
  { label: "Schakel", sub: "Rijbewijs B", icon: "M5 17h14M5 17a2 2 0 0 1-2-2v-3l2-5h12l2 5v3a2 2 0 0 1-2 2M7 17v2M17 17v2" },
  { label: "Automaat", sub: "Rijbewijs B", icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zM12 8v4l3 2" },
  { label: "Spoedcursus", sub: "Snel je rijbewijs", icon: "M13 2L3 14h7l-1 8 10-12h-7z" },
  { label: "Proefles", sub: "Maak kennis", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" },
];

export interface Aanbod {
  tag: string;
  titel: string;
  tekst: string;
  img: string;
}

export const aanbod: Aanbod[] = [
  {
    tag: "RIJBEWIJS B",
    titel: "Autorijles in Bergen op Zoom",
    tekst:
      "Volg je rijlessen op een schakelauto en haal je rijbewijs met een duidelijk plan. Beschikbaar voor zowel schakel als automaat.",
    img: "/uploads/pasted-1782639081845-0.png",
  },
  {
    tag: "AUTOMAAT",
    titel: "Rijbewijs B automaat",
    tekst:
      "Geen gedoe met koppeling en schakelen. Vaak sneller klaar en ideaal voor ontspannen rijden in druk verkeer.",
    img: "/uploads/LesFoto6.jpg",
  },
  {
    tag: "SPOED",
    titel: "Spoedcursus rijbewijs",
    tekst:
      "In een korte, intensieve periode naar je examen, examen inbegrepen. Strakke planning en snel resultaat.",
    img: "/uploads/LesFoto1.jpg",
  },
  {
    tag: "FAALANGST",
    titel: "Faalangsttraining",
    tekst:
      "Zie je op tegen het examen? Met extra begeleiding en een faalangstexamen rijd je met rust en vertrouwen.",
    img: "/uploads/pasted-1782639081845-0.png",
  },
];

export const redenen = [
  "Rijden volgens een duidelijk plan",
  "Hoog slagingspercentage (92%)",
  "Eén vaste, ervaren instructeur",
  "Korte wachttijden",
  "Persoonlijke begeleiding",
  "Schakel én automaat mogelijk",
];

export interface Badge {
  label: string;
  offset: string;
}

export const badges: Badge[] = [
  { label: "Hoog slagingspercentage", offset: "0px" },
  { label: "Persoonlijke begeleiding", offset: "52px" },
  { label: "Flexibele lestijden", offset: "104px" },
];

export const plaatsen = [
  "Bergen op Zoom", "Roosendaal", "Halsteren", "Steenbergen",
  "Tholen", "Woensdrecht", "Wouw", "Putte",
];

export interface Review {
  naam: string;
  initiaal: string;
  plaats: string;
  tekst: string;
}

export const reviews: Review[] = [
  {
    naam: "Tim", initiaal: "T", plaats: "Bergen op Zoom",
    tekst:
      "In één keer geslaagd! Danny legt alles rustig uit en je merkt dat hij echt wil dat je het snapt. Geen stress, wel resultaat.",
  },
  {
    naam: "Naomi", initiaal: "N", plaats: "Roosendaal",
    tekst:
      "Op automaat gehaald binnen een paar maanden. Super geduldig en eerlijk over wat ik nog moest oefenen. Echt een aanrader.",
  },
  {
    naam: "Bram", initiaal: "B", plaats: "Halsteren",
    tekst:
      "Ik had behoorlijke examenvrees, maar met de faalangsttraining ging het ineens veel beter. Met vertrouwen het examen in.",
  },
  {
    naam: "Sara", initiaal: "S", plaats: "Steenbergen",
    tekst:
      "Fijne lessen, flexibel in te plannen en altijd goede uitleg. Voelde me echt gecoacht in plaats van afgeraffeld.",
  },
];

export interface Faq {
  v: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    v: "Vanaf welke leeftijd mag ik beginnen?",
    a: "Je mag vanaf 16,5 jaar starten met autorijlessen. Je praktijkexamen doe je vanaf je 17e (met begeleiding via 2toDrive) of vanaf je 18e zelfstandig.",
  },
  {
    v: "Schakel of automaat — wat kies ik?",
    a: "Met een automaat ben je vaak sneller klaar en rijd je ontspannener in druk verkeer. Wil je later elke auto kunnen rijden, kies dan schakel. We denken graag met je mee wat bij jou past.",
  },
  {
    v: "Hoeveel lessen heb ik nodig?",
    a: "Dat verschilt per persoon. Veel leerlingen kiezen een pakket van 20 of 30 uur. Met de proefles maken we samen een realistische inschatting.",
  },
  {
    v: "Wat kost een losse rijles?",
    a: "Een rijles van 60 minuten kost €55. Lessen zijn in overleg in te plannen, ook in blokken van 90 of 120 minuten.",
  },
  {
    v: "Kan ik rijles volgen zonder theorie?",
    a: "Je mag starten met rijlessen terwijl je aan je theorie werkt. Je theorie-examen moet je wel gehaald hebben voordat je praktijkexamen kunt doen.",
  },
];

export interface Pakket {
  naam: string;
  prijs: string;
  populair: boolean;
  regels: string[];
}

export const pakketten: Pakket[] = [
  {
    naam: "Lespakket 20 uur", prijs: "€1.395", populair: false,
    regels: ["20 rijlessen van 60 minuten", "Tussentijdse toets of CBR-examen", "Lesmateriaal & begeleiding"],
  },
  {
    naam: "Lespakket 30 uur", prijs: "€1.995", populair: true,
    regels: ["30 rijlessen van 60 minuten", "CBR-praktijkexamen inbegrepen", "Tussentijdse toets inbegrepen", "Meest gekozen voor beginners"],
  },
  {
    naam: "Losse lessen", prijs: "€55", populair: false,
    regels: ["Rijles per 60 minuten", "Flexibel bijboeken", "Ook 90 of 120 min mogelijk"],
  },
];
