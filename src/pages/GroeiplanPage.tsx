import { TrendingUp, CheckCircle, AlertCircle, ArrowRight, Sparkles } from "lucide-react";

const present = ["Stakeholder management", "Procesverbetering", "Klantrelatiebeheer", "PRINCE2", "Lean Yellow Belt", "Analytisch vermogen"];
const missing = ["Consultancy-ervaring", "Projectportfolio", "Adviesvaardigheden", "Presentatie aan directieniveau"];

export default function GroeiplanPage() {
  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" /> Groeiplan
        </h1>
        <p className="text-muted-foreground mt-1">Overbrugging van je huidige profiel naar je gewenste richting</p>
        <span className="ai-badge mt-2 inline-flex"><Sparkles className="w-3 h-3" /> AI-gegenereerd</span>
      </div>

      <div className="gradient-border-card p-5">
        <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Gewenste richting</h3>
        <p className="text-sm text-muted-foreground">Implementatieconsultant / Procesconsultant in de publieke of cultuursector</p>
      </div>

      <div className="gradient-border-card p-5">
        <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Huidige afstand</h3>
        <p className="text-sm text-muted-foreground">Je hebt de kernkwaliteiten en werkwaarden die bij deze richting passen. Het verschil zit vooral in directe consultancy-ervaring en een zichtbaar adviesportfolio.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="gradient-border-card p-5">
          <h3 className="text-sm font-semibold text-secondary mb-3 flex items-center gap-1.5"><CheckCircle className="w-4 h-4" /> Wat al aanwezig is</h3>
          <div className="flex flex-wrap gap-2">
            {present.map(p => <span key={p} className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">{p}</span>)}
          </div>
        </div>
        <div className="gradient-border-card p-5">
          <h3 className="text-sm font-semibold text-destructive mb-3 flex items-center gap-1.5"><AlertCircle className="w-4 h-4" /> Wat nog ontbreekt</h3>
          <div className="flex flex-wrap gap-2">
            {missing.map(m => <span key={m} className="px-2.5 py-1 rounded-full bg-destructive/10 text-destructive text-xs font-medium">{m}</span>)}
          </div>
        </div>
      </div>

      <div className="gradient-border-card p-5 bg-primary/5">
        <h3 className="font-heading text-sm font-semibold text-primary mb-2">Slimste tussenstap</h3>
        <p className="text-sm text-foreground">Start als junior implementatieconsultant of projectcoördinator bij een adviesbureau met een duidelijk leertraject. Focus op 2-3 opdrachten waarbij je procesanalyse en klantadvies combineert.</p>
      </div>

      {/* Timeline */}
      <div className="space-y-4">
        <h3 className="font-heading text-sm font-semibold text-foreground">30 / 60 / 90 dagen</h3>
        {[
          { period: "30 dagen", items: ["Solliciteer op 3-5 passende vacatures", "Voer 2 informatieve gesprekken", "Start met zichtbare LinkedIn-content"] },
          { period: "60 dagen", items: ["Volg een workshop adviesvaardigheden", "Bouw een mini-casestudy op basis van eerdere werkervaring", "Vergroot netwerk in de cultuursector"] },
          { period: "90 dagen", items: ["Eerste opdracht of rol gestart", "Portfolio met 1-2 cases", "Feedbackgesprek plannen met mentor of manager"] },
        ].map(t => (
          <div key={t.period} className="gradient-border-card p-5">
            <h4 className="text-sm font-semibold text-primary mb-2">{t.period}</h4>
            <ul className="space-y-1.5">
              {t.items.map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
