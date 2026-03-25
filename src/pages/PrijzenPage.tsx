import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Gratis",
    price: "€0",
    period: "voor altijd",
    desc: "Ontdek je richting en probeer de kerntools.",
    cta: "Start gratis",
    ctaLink: "/onboarding",
    highlight: false,
    features: [
      "Loopbaanverkenning (Career Blueprint)",
      "1 vacature-fit analyse per week",
      "Basis CV-generator",
      "Basis motivatiebrief",
      "Actie-overzicht",
    ],
  },
  {
    name: "Pro",
    price: "€14,99",
    period: "per maand",
    desc: "Alles wat je nodig hebt om gericht te zoeken en sterk te solliciteren.",
    cta: "Probeer Pro gratis",
    ctaLink: "/onboarding",
    highlight: true,
    features: [
      "Alles uit Gratis",
      "Onbeperkt vacature-fit analyses",
      "CV op maat per vacature",
      "Motivatiebrief in drieluik-formaat",
      "Interviewvoorbereiding met STAR-voorbeelden",
      "Groeiplan met 30/60/90-dagenplanning",
      "Prioriteit bij nieuwe features",
    ],
  },
  {
    name: "Team",
    price: "Op aanvraag",
    period: "",
    desc: "Voor loopbaancoaches, HR-teams en opleidingsinstellingen.",
    cta: "Neem contact op",
    ctaLink: "/onboarding",
    highlight: false,
    features: [
      "Alles uit Pro",
      "Meerdere gebruikersprofielen",
      "Coach-dashboard",
      "Whitelabel-opties",
      "Dedicated support",
    ],
  },
];

export default function PrijzenPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg font-bold text-foreground tracking-tight">
            Werk<span className="text-primary">Kompas</span>
          </Link>
          <Link
            to="/onboarding"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Start gratis
          </Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Eén platform, helder geprijsd
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Start gratis met je loopbaanverkenning. Upgrade wanneer je gerichter wilt zoeken en sterker wilt solliciteren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`gradient-border-card p-6 flex flex-col ${
                  plan.highlight ? "ring-2 ring-primary/50" : ""
                }`}
              >
                {plan.highlight && (
                  <span className="ai-badge mb-4 w-fit text-[11px]">Meest gekozen</span>
                )}
                <h3 className="font-heading text-xl font-bold text-foreground">{plan.name}</h3>
                <div className="mt-2 mb-1">
                  <span className="font-heading text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.period && (
                    <span className="text-sm text-muted-foreground ml-1">/ {plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to={plan.ctaLink}
                  className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
                    plan.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:bg-accent"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-heading text-sm font-semibold text-muted-foreground">
            Werk<span className="text-primary">Kompas</span>
          </Link>
          <p className="text-xs text-muted-foreground">© 2026 WerkKompas. Van twijfel naar een gerichte volgende stap.</p>
        </div>
      </footer>
    </div>
  );
}
