import ContactForm from "@/components/ContactForm";
import MobileMenu from "@/components/MobileMenu";
import {
  SteeringWheel, Check, ArrowRight, Phone, WhatsApp, Pin, Clock, Plus,
} from "@/components/Icons";
import {
  phoneDisplay, telHref, waHref, score, reviewCount,
  usps, tiles, aanbod, redenen, badges, plaatsen, reviews, faqs, pakketten,
} from "@/lib/data";

export default function Home() {
  return (
    <div style={{ background: "#fff", color: "var(--ink)", fontFamily: "'Mulish',system-ui,sans-serif", minHeight: "100vh", width: "100%", overflowX: "hidden", position: "relative" }}>

      {/* TOP TRUST BAR (navy) */}
      <div className="k-topbar-wrap" style={{ background: "var(--navy)", color: "#cfe4e7" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "9px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 22, flexWrap: "wrap" }}>
            {usps.map((u) => (
              <span key={u} style={{ display: "inline-flex", alignItems: "center", gap: 7, fontSize: 13, fontWeight: 700, letterSpacing: ".2px" }}>
                <Check />{u}
              </span>
            ))}
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>
            <span style={{ fontWeight: 700, color: "#cfe4e7" }}>Google</span>
            <span style={{ color: "var(--teal)", letterSpacing: 1 }}>★★★★★</span>
            {score} · {reviewCount} reviews
          </span>
        </div>
      </div>

      {/* HEADER (white) */}
      <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,.94)", backdropFilter: "blur(12px)", borderBottom: "1px solid #e9eff0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "12px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <SteeringWheel size={36} stroke="var(--petrol)" width={3.6} style={{ flex: "none" }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: ".5px", lineHeight: 1, color: "var(--petrol)" }}>
              KLEEN <span style={{ fontWeight: 500, color: "var(--teal-2)" }}>INSTRUCTIONS</span>
              <span style={{ display: "block", fontFamily: "'Mulish'", fontWeight: 700, fontSize: 9, letterSpacing: "1.8px", color: "var(--ink-soft)", marginTop: 3 }}>TRAINING &amp; COACHING IN RIJVAARDIGHEID</span>
            </span>
          </a>
          <nav className="k-desk-nav" style={{ gap: 24, alignItems: "center" }}>
            {[["#aanbod", "Aanbod"], ["#waarom", "Waarom KLEEN"], ["#tarieven", "Pakketten"], ["#reviews", "Reviews"], ["#faq", "FAQ"]].map(([href, label]) => (
              <a key={href} href={href} style={{ textDecoration: "none", fontWeight: 700, fontSize: 14.5, color: "var(--petrol)" }}>{label}</a>
            ))}
          </nav>
          <a href="#contact" className="k-pill k-header-cta" style={{ display: "flex", alignItems: "center", gap: 9, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 14.5, padding: "11px 20px", whiteSpace: "nowrap" }}>
            Proefles aanvragen <ArrowRight size={15} />
          </a>
          <MobileMenu />
        </div>
      </header>

      {/* HERO */}
      <section id="top" style={{ position: "relative", overflow: "hidden", background: "radial-gradient(120% 90% at 78% 0%,#16565f 0%,#0d3f47 45%,#082a31 100%)", color: "#eaf2f3" }}>
        <SteeringWheel size={620} stroke="#fff" width={1.5} style={{ position: "absolute", right: -170, top: -90, opacity: .06, pointerEvents: "none" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1180, margin: "0 auto", padding: "60px 22px 76px" }}>
          <div style={{ maxWidth: 660 }}>
            <span className="k-eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginBottom: 18, color: "var(--teal)" }}>
              <span style={{ width: 24, height: 2, background: "var(--teal)", display: "inline-block" }} />Sinds 2015 · Autorijschool Bergen op Zoom
            </span>
            <h1 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(42px,12vw,80px)", lineHeight: .95, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 18 }}>
              Rijschool<br /><span style={{ color: "var(--teal)" }}>Bergen op Zoom</span>
            </h1>
            <p style={{ fontSize: "clamp(16px,4.4vw,19px)", lineHeight: 1.55, color: "#bcd6da", fontWeight: 500, maxWidth: 520, marginBottom: 28 }}>
              Welkom bij KLEEN Instructions — training &amp; coaching in rijvaardigheid. Met een rustige, persoonlijke aanpak rijd je met vertrouwen naar je examen, schakel of automaat.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
              <a href="#contact" className="k-pill" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "15px 26px", boxShadow: "0 12px 34px -10px rgba(92,192,205,.5)" }}>
                Proefles aanvragen <ArrowRight size={16} />
              </a>
              <a href={telHref} style={{ display: "inline-flex", alignItems: "center", gap: 9, color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 16, padding: "15px 10px" }}>
                <span style={{ display: "grid", placeItems: "center", width: 34, height: 34, borderRadius: "50%", background: "rgba(255,255,255,.1)" }}>
                  <Phone size={16} stroke="var(--teal)" />
                </span>
                {phoneDisplay}
              </a>
            </div>
            <div className="k-hero-note" style={{ alignItems: "center", gap: 7, marginTop: 18, color: "#7fa4ab", fontSize: 13, fontWeight: 600 }}>
              <Check size={15} width={2.4} />Geen verplichting · meestal binnen 1 werkdag reactie
            </div>
          </div>
        </div>
      </section>

      <main>

        {/* WAT ZOEK JE */}
        <section style={{ maxWidth: 1180, margin: "0 auto", padding: "26px 22px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "14px 18px", flexWrap: "wrap", justifyContent: "center" }}>
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: ".5px", textTransform: "uppercase", color: "var(--petrol)" }}>Wat zoek je?</span>
            {tiles.map((t) => (
              <a key={t.label} href="#aanbod" className="k-pill k-tile" style={{ display: "inline-flex", alignItems: "center", gap: 11, textDecoration: "none", background: "#fff", border: "1px solid #e3edee", padding: "8px 20px 8px 8px", boxShadow: "0 8px 20px -16px rgba(14,69,78,.5)" }}>
                <span style={{ display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: "50%", background: "linear-gradient(160deg,#12525c,#0e454e)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={t.icon} /></svg>
                </span>
                <span style={{ fontWeight: 800, fontSize: 15, color: "var(--petrol)" }}>{t.label}</span>
              </a>
            ))}
          </div>
        </section>

        {/* ONS AANBOD */}
        <section id="aanbod" style={{ maxWidth: 1180, margin: "0 auto", padding: "48px 22px 8px", textAlign: "center" }}>
          <span className="k-eyebrow">Ons aanbod</span>
          <h2 className="k-h2" style={{ color: "var(--petrol)", margin: "10px 0 16px" }}>Ons aanbod aan rijlessen</h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.6, maxWidth: 680, margin: "0 auto 36px" }}>
            Bij KLEEN Instructions in Bergen op Zoom bieden we een breed aanbod om bij jouw wensen te passen. Of je nu kiest voor schakel, automaat, een spoedcursus of faalangsttraining — je leert veilig en zelfverzekerd rijden.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))", gap: 16, textAlign: "left" }}>
            {aanbod.map((a) => (
              <div key={a.titel + a.tag} style={{ display: "flex", flexDirection: "column", background: "var(--tint)", borderRadius: 18, overflow: "hidden" }}>
                <div style={{ padding: "24px 22px 18px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: 12, letterSpacing: "1.2px", color: "var(--teal-2)", marginBottom: 8 }}>{a.tag}</span>
                  <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 24, lineHeight: 1.05, letterSpacing: ".3px", color: "var(--petrol)", marginBottom: 10 }}>{a.titel}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-soft)", flex: 1, marginBottom: 16 }}>{a.tekst}</p>
                  <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 7, textDecoration: "none", fontWeight: 800, fontSize: 14.5, color: "var(--teal-2)" }}>
                    Meer informatie <ArrowRight size={16} stroke="var(--teal-2)" width={2.4} />
                  </a>
                </div>
                <div style={{ height: 160, background: "#dceaeb" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.img} alt={a.titel} style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WAAROM KIEZEN (teal kleurvlak + witte checklist-card) */}
        <section id="waarom" style={{ padding: "48px 22px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", position: "relative", background: "var(--teal-2)", borderRadius: 26, overflow: "hidden", padding: "clamp(30px,5vw,56px)" }}>
            <SteeringWheel size={460} stroke="#fff" width={1.6} style={{ position: "absolute", left: -150, bottom: -150, opacity: .08, pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 30, alignItems: "center" }}>
              <div style={{ color: "#fff" }}>
                <h2 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "clamp(30px,6.5vw,48px)", lineHeight: 1.02, letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 18 }}>
                  Waarom kiezen voor KLEEN Instructions?
                </h2>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "#eaf7f8", marginBottom: 16 }}>
                  Bij KLEEN Instructions, je rijschool in Bergen op Zoom, krijg je doelgerichte rijlessen waarmee je zelfverzekerd en met controle de weg op gaat. Dankzij persoonlijke begeleiding en flexibele lestijden boek je bij elke les vooruitgang.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: "#eaf7f8", marginBottom: 26 }}>
                  Je leert hier niet alleen rijden, maar ontwikkelt echte rijvaardigheid — zodat je veilig en zelfstandig de weg op kunt.
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                  <a href="#contact" className="k-pill" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "#fff", color: "var(--petrol)", textDecoration: "none", fontWeight: 800, fontSize: 15, padding: "14px 24px" }}>
                    Proefles aanvragen <ArrowRight size={16} stroke="var(--petrol)" />
                  </a>
                  <a href={telHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 15 }}>
                    <Phone size={16} stroke="#fff" />{phoneDisplay}
                  </a>
                </div>
              </div>
              <div style={{ position: "relative", background: "#fff", borderRadius: 20, padding: "30px 28px", boxShadow: "0 30px 60px -28px rgba(0,0,0,.4)" }}>
                <SteeringWheel size={92} stroke="var(--teal)" width={3} style={{ position: "absolute", right: -14, top: -22 }} />
                <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 26, lineHeight: 1.05, letterSpacing: ".3px", color: "var(--petrol)", marginBottom: 20, maxWidth: 230 }}>
                  Dit is waarom je rijles neemt bij KLEEN
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {redenen.map((r) => (
                    <div key={r} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 15.5, fontWeight: 600, color: "#34424a" }}>
                      <Check size={20} stroke="var(--teal-2)" width={2.8} style={{ flex: "none" }} />{r}
                    </div>
                  ))}
                </div>
                <a href="#contact" className="k-pill" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 15, padding: 14, marginTop: 24 }}>
                  Proefles aanvragen
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PAKKETTEN (navy) */}
        <section id="tarieven" style={{ background: "var(--navy)", color: "#eaf2f3", padding: "60px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
            <span className="k-eyebrow" style={{ color: "var(--teal)" }}>Voor alle rijbewijzen</span>
            <h2 className="k-h2" style={{ color: "#fff", margin: "10px 0 12px" }}>Onze aanbevolen pakketten</h2>
            <p style={{ color: "#9cc4ca", fontSize: 16, lineHeight: 1.6, maxWidth: 600, margin: "0 auto 36px" }}>
              Examens zitten bij de pakketten inbegrepen, zodat je vooraf precies weet waar je aan toe bent.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16, textAlign: "left", marginBottom: 18 }}>
              {pakketten.map((pk) => (
                <div key={pk.naam} style={{ position: "relative", background: "#fff", borderRadius: 18, padding: "28px 24px", display: "flex", flexDirection: "column" }}>
                  {pk.populair && (
                    <span className="k-pill" style={{ position: "absolute", top: -11, left: 24, background: "var(--teal)", color: "#062024", fontWeight: 800, fontSize: 11, letterSpacing: ".5px", textTransform: "uppercase", padding: "6px 13px" }}>
                      Meest gekozen
                    </span>
                  )}
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 24, letterSpacing: ".3px", color: "var(--petrol)", marginBottom: 6 }}>{pk.naam}</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 20 }}>
                    <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 44, color: "var(--teal-2)" }}>{pk.prijs}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 24, flex: 1 }}>
                    {pk.regels.map((reg) => (
                      <div key={reg} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: 14.5, color: "#34424a", lineHeight: 1.4 }}>
                        <Check size={17} stroke="var(--teal-2)" width={2.8} style={{ flex: "none", marginTop: 1 }} />{reg}
                      </div>
                    ))}
                  </div>
                  <a href="#contact" className="k-pill" style={{ display: "block", textAlign: "center", textDecoration: "none", background: "var(--teal)", color: "#062024", fontWeight: 800, fontSize: 15, padding: 13 }}>
                    Dit pakket aanvragen
                  </a>
                </div>
              ))}
            </div>
            <p style={{ color: "#7fa4ab", fontSize: 13.5, lineHeight: 1.6, maxWidth: 680, margin: "0 auto" }}>
              Losse tarieven: proefles €49 · rijles €55 p/u · tussentijdse toets €175 · CBR-praktijkexamen €295.{" "}
              <a href="#contact" style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "none" }}>Hulp nodig bij je keuze?</a>
            </p>
          </div>
        </section>

        {/* REVIEWS (light tint + Google rating) */}
        <section id="reviews" style={{ background: "var(--tint)", color: "var(--ink)", padding: "60px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span style={{ fontWeight: 700, fontSize: 20, color: "#5f6c72" }}>Google</span>
              <span style={{ color: "#fbbc04", fontSize: 18, letterSpacing: 1 }}>★★★★★</span>
              <span style={{ fontWeight: 800, color: "var(--ink)" }}>{score}</span>
              <span style={{ color: "var(--ink-soft)", fontWeight: 600 }}>· {reviewCount} reviews</span>
            </div>
            <h2 className="k-h2" style={{ color: "var(--petrol)", marginBottom: 14 }}>Al honderden leerlingen geslaagd</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.6, maxWidth: 640, margin: "0 auto 36px" }}>
              Onze persoonlijke aanpak zorgt ervoor dat je goed voorbereid en met vertrouwen het examen in gaat. Ervaar zelf waarom leerlingen voor KLEEN Instructions kiezen.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 16, textAlign: "left" }}>
              {reviews.map((r) => (
                <div key={r.naam} style={{ background: "#fff", borderRadius: 18, padding: 24, display: "flex", flexDirection: "column", boxShadow: "0 14px 30px -22px rgba(14,69,78,.5)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                    <span style={{ display: "grid", placeItems: "center", width: 40, height: 40, borderRadius: "50%", background: "var(--teal-2)", color: "#fff", fontWeight: 800, fontSize: 16 }}>{r.initiaal}</span>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 15, color: "var(--ink)" }}>{r.naam}</div>
                      <div style={{ color: "#2fae5f", fontSize: 13, letterSpacing: 1 }}>★★★★★</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#46555c", flex: 1 }}>“{r.tekst}”</p>
                  <div style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 600, marginTop: 14 }}>{r.plaats}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WERKGEBIED (beeld + badges) */}
        <section id="werkgebied" style={{ background: "#fff", color: "var(--ink)", padding: "60px 0" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 40, alignItems: "center" }}>
            <div>
              <span className="k-eyebrow">Voor alle rijbewijzen</span>
              <h2 className="k-h2" style={{ color: "var(--petrol)", margin: "10px 0 16px" }}>Autorijles in heel Bergen op Zoom e.o.</h2>
              <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.65, marginBottom: 16 }}>
                Bij KLEEN Instructions ben je verzekerd van persoonlijke rijlessen in Bergen op Zoom en de hele omgeving. Onze ervaren aanpak staat voor je klaar — waar je ook woont in West-Brabant.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
                {plaatsen.map((p) => (
                  <span key={p} className="k-pill" style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "var(--tint)", border: "1px solid #dcebec", padding: "8px 14px", fontSize: 13.5, fontWeight: 700, color: "var(--petrol)" }}>
                    <Pin size={14} />{p}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
                <a href="#contact" className="k-pill" style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 15, padding: "14px 24px" }}>
                  Proefles aanvragen <ArrowRight size={16} />
                </a>
                <a href={telHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--petrol)", textDecoration: "none", fontWeight: 800, fontSize: 15 }}>
                  <Phone size={16} stroke="var(--teal-2)" />{phoneDisplay}
                </a>
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: 22, overflow: "hidden", aspectRatio: "5/4", minHeight: 280, background: "#dceaeb" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/uploads/pasted-1782639081845-0.png" alt="Lesauto KLEEN Instructions in Bergen op Zoom" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              {badges.map((b) => (
                <span key={b.label} className="k-pill" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(8,42,49,.82)", backdropFilter: "blur(4px)", color: "#fff", fontWeight: 700, fontSize: 13, padding: "9px 15px", position: "absolute", left: 16, boxShadow: "0 8px 20px -8px rgba(0,0,0,.5)", top: `calc(18px + ${b.offset})` }}>
                  <Check size={15} width={3} />{b.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ (light tint) */}
        <section id="faq" style={{ background: "var(--tint)", color: "var(--ink)", padding: "60px 0" }}>
          <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 22px", textAlign: "center" }}>
            <span className="k-eyebrow">Voor alle rijbewijzen</span>
            <h2 className="k-h2" style={{ color: "var(--petrol)", margin: "10px 0 14px" }}>Veelgestelde vragen</h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, lineHeight: 1.6, maxWidth: 600, margin: "0 auto 30px" }}>
              Heb je vragen over onze rijlessen, instructeur of betalingsmogelijkheden? Staat je vraag er niet tussen? Neem gerust{" "}
              <a href="#contact" style={{ color: "var(--teal-2)", fontWeight: 700, textDecoration: "none" }}>contact</a> met ons op.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, textAlign: "left" }}>
              {faqs.map((f) => (
                <details key={f.v} style={{ background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 10px 24px -20px rgba(14,69,78,.5)" }}>
                  <summary style={{ listStyle: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, padding: "20px 22px", fontWeight: 700, fontSize: 16, color: "var(--petrol)" }}>
                    {f.v}<Plus className="pm" size={22} style={{ flex: "none" }} />
                  </summary>
                  <div style={{ padding: "0 22px 22px", color: "#46555c", fontSize: 15, lineHeight: 1.6 }}>{f.a}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{ position: "relative", background: "radial-gradient(120% 80% at 50% 0%,#16565f 0%,#0d3f47 50%,#082a31 100%)", color: "#eaf2f3", padding: "60px 0 64px" }}>
          <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 22px", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, alignItems: "start" }}>
            <div>
              <span className="k-eyebrow" style={{ color: "var(--teal)" }}>Contact</span>
              <h2 className="k-h2" style={{ margin: "10px 0 14px" }}>Plan je proefles</h2>
              <p style={{ color: "#bcd6da", fontSize: 16, lineHeight: 1.6, marginBottom: 22 }}>
                Bellen of appen gaat het snelst — meestal binnen een werkdag een reactie. Liever het formulier? Ook prima, dan nemen we contact met je op.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 22 }}>
                <a href={telHref} style={{ display: "flex", alignItems: "center", gap: 13, textDecoration: "none", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14, padding: "15px 17px" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 11, background: "var(--teal)", color: "#062024" }}>
                    <Phone size={19} stroke="#062024" />
                  </span>
                  <div>
                    <div style={{ fontSize: 12, color: "#7fa4ab", fontWeight: 600 }}>Bel direct</div>
                    <div style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>{phoneDisplay}</div>
                  </div>
                </a>
                <a href={waHref} style={{ display: "flex", alignItems: "center", gap: 13, textDecoration: "none", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14, padding: "15px 17px" }}>
                  <span style={{ flex: "none", display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 11, background: "var(--teal)", color: "#062024" }}>
                    <WhatsApp size={21} />
                  </span>
                  <div>
                    <div style={{ fontSize: 12, color: "#7fa4ab", fontWeight: 600 }}>Stuur een appje</div>
                    <div style={{ fontWeight: 800, fontSize: 17, color: "#fff" }}>WhatsApp ons</div>
                  </div>
                </a>
              </div>
              <div style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 14, padding: 18, marginBottom: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 800, fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: "#7fa4ab", marginBottom: 12 }}>
                  <Clock size={15} />Openingstijden
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "5px 0", color: "#bcd6da" }}><span>Maandag — Vrijdag</span><span style={{ fontWeight: 700, color: "#fff" }}>08:00 — 21:00</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "5px 0", color: "#bcd6da" }}><span>Zaterdag</span><span style={{ fontWeight: 700, color: "#fff" }}>08:00 — 17:00</span></div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14, padding: "5px 0", color: "#bcd6da" }}><span>Zondag</span><span style={{ fontWeight: 700, color: "#7fa4ab" }}>Op afspraak</span></div>
              </div>
              <div style={{ position: "relative", borderRadius: 14, overflow: "hidden", border: "1px solid rgba(255,255,255,.12)", height: 200, background: "#0a3138", backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize: "32px 32px" }}>
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  <Pin size={34} fill="var(--teal)" stroke="#082a31" width={1.4} innerFill="#082a31" />
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: 800, fontSize: 14, color: "#fff" }}>Vertrekpunt Bergen op Zoom</div>
                    <div style={{ fontSize: 12, color: "#7fa4ab", fontFamily: "monospace", marginTop: 3 }}>[ adres + kaart volgt ]</div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>

      </main>

      {/* FOOTER (navy, multi-column) */}
      <footer style={{ background: "var(--navy)", color: "#cfe4e7", padding: "48px 22px 110px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 18, paddingBottom: 26, borderBottom: "1px solid rgba(255,255,255,.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <SteeringWheel size={40} stroke="#fff" width={3.4} />
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: ".5px", color: "#fff" }}>
                KLEEN <span style={{ fontWeight: 500, color: "var(--teal)" }}>INSTRUCTIONS</span>
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
              <a href={telHref} style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", fontWeight: 800, color: "#fff" }}>
                <Phone size={16} />{phoneDisplay}
              </a>
              <a href="#contact" className="k-pill" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 14, padding: "11px 20px" }}>
                Proefles aanvragen
              </a>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(170px,1fr))", gap: 28, paddingTop: 30 }}>
            <div style={{ minWidth: 200 }}>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 12 }}>Over KLEEN Instructions</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "#8fb0b5", marginBottom: 14 }}>
                Autorijles &amp; rijvaardigheidstraining in Bergen op Zoom en omgeving, met persoonlijke begeleiding.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#8fb0b5", marginBottom: 6 }}>
                <Pin size={15} stroke="var(--teal)" width={2} />Bergen op Zoom [adres volgt]
              </div>
              <a href={telHref} style={{ display: "block", fontSize: 14, color: "var(--teal)", fontWeight: 700, textDecoration: "none", marginTop: 4 }}>{phoneDisplay}</a>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 12 }}>Opleidingen</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {["Autorijles (schakel)", "Rijbewijs automaat", "Spoedcursus", "Faalangsttraining", "Proefles"].map((l) => (
                  <a key={l} href="#aanbod" style={{ textDecoration: "none", fontSize: 14, color: "#a9c6cb" }}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 12 }}>Praktisch</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                {[["#tarieven", "Tarieven & pakketten"], ["#werkgebied", "Werkgebied"], ["#reviews", "Reviews"], ["#faq", "Veelgestelde vragen"], ["#contact", "Contact"]].map(([href, label]) => (
                  <a key={href} href={href} style={{ textDecoration: "none", fontSize: 14, color: "#a9c6cb" }}>{label}</a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 12 }}>Werkgebied</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
                <span style={{ fontSize: 14, color: "#a9c6cb" }}>Bergen op Zoom</span>
                <span style={{ fontSize: 14, color: "#a9c6cb" }}>Roosendaal · Halsteren</span>
                <span style={{ fontSize: 14, color: "#a9c6cb" }}>Steenbergen · Tholen</span>
                <span style={{ fontSize: 14, color: "#a9c6cb" }}>Woensdrecht · Wouw</span>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 30, paddingTop: 18, borderTop: "1px solid rgba(255,255,255,.08)", fontSize: 12.5, color: "#6e9298" }}>
            KLEEN Instructions © alle rechten voorbehouden · KvK 00000000 · BTW NL000000000B00
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE CTA BAR */}
      <div className="k-mobile-bar" style={{ position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 60, display: "flex", gap: 1, background: "rgba(255,255,255,.08)", borderTop: "1px solid rgba(8,42,49,.12)", backdropFilter: "blur(10px)" }}>
        <a href={telHref} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: "var(--navy)", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 15, padding: "15px 10px" }}>
          <Phone size={17} />Bellen
        </a>
        <a href={waHref} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 9, background: "var(--teal)", color: "#062024", textDecoration: "none", fontWeight: 800, fontSize: 15, padding: "15px 10px" }}>
          <WhatsApp size={18} />WhatsApp
        </a>
      </div>
    </div>
  );
}
