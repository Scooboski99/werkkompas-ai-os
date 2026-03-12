import { useState } from "react";
import { Search, CheckCircle, AlertTriangle, XCircle, ArrowRight, Sparkles, BookmarkPlus } from "lucide-react";

const mockAnalysis = {
  title: "Implementatieconsultant",
  company: "Berenschot",
  verdict: "Solliciteer",
  score: 84,
  dimensions: [
    { label: "Functie-fit", score: 17, max: 20 },
    { label: "Sector-fit", score: 18, max: 20 },
    { label: "Werkwaarden-fit", score: 16, max: 20 },
    { label: "Kernwaarden-fit", score: 17, max: 20 },
    { label: "Strategische waarde", score: 16, max: 20 },
  ],
  fits: [
    "Combineert procesverbetering met klantcontact — kernkwaliteiten van jouw profiel",
    "Impact-gedreven organisatie past bij jouw waarden",
    "PRINCE2 en Lean-certificeringen worden expliciet gevraagd",
    "Samenwerking met diverse stakeholders sluit aan bij jouw energiegevers",
  ],
  risks: [
    "Reisbereidheid vereist (60% bij klanten op locatie)",
    "Kan politiek geladen zijn in sommige opdrachten",
  ],
  redFlags: [],
  positioning: "Positioneer jezelf als iemand die niet alleen analyseert maar ook implementeert. Benadruk je ervaring met stakeholder management en je Lean-certificering als bewijs van gestructureerd werken.",
};

export default function VacatureAnalyzerPage() {
  const [showResult, setShowResult] = useState(true);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
          <Search className="w-5 h-5 text-primary" /> Vacature Analyzer
        </h1>
        <p className="text-muted-foreground mt-1">Analyseer elke vacature op fit met jouw profiel</p>
      </div>

      {/* Input */}
      <div className="gradient-border-card p-5">
        <div className="flex gap-2 mb-4">
          {["Plak vacaturetekst", "Plak URL", "Handmatig"].map((t, i) => (
            <button key={t} onClick={() => setActiveTab(i)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${activeTab === i ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              {t}
            </button>
          ))}
        </div>
        <textarea rows={4} placeholder="Plak hier de vacaturetekst..."
          className="w-full p-4 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:ring-1 focus:ring-primary" />
        <button onClick={() => setShowResult(true)}
          className="mt-3 flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
          Analyseer deze vacature <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Result */}
      {showResult && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="ai-badge"><Sparkles className="w-3 h-3" /> AI-gegenereerde analyse</span>
          </div>

          {/* Verdict */}
          <div className="gradient-border-card p-6 flex flex-col sm:flex-row items-center gap-6">
            <div className="relative w-24 h-24 shrink-0">
              <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8"
                  strokeDasharray={`${mockAnalysis.score * 2.83} 283`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-foreground">{mockAnalysis.score}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="font-heading text-lg font-bold text-secondary">{mockAnalysis.verdict}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground">{mockAnalysis.title}</h3>
              <p className="text-muted-foreground">{mockAnalysis.company}</p>
            </div>
            <button className="sm:ml-auto flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
              <BookmarkPlus className="w-4 h-4" /> Opslaan
            </button>
          </div>

          {/* Scores */}
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-4">Scores</h3>
            <div className="space-y-3">
              {mockAnalysis.dimensions.map(d => (
                <div key={d.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">{d.label}</span>
                    <span className="text-foreground font-medium">{d.score}/{d.max}</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(d.score / d.max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fits & risks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="gradient-border-card p-5">
              <h3 className="font-heading text-sm font-semibold text-secondary mb-3">Wat past</h3>
              <ul className="space-y-2">
                {mockAnalysis.fits.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gradient-border-card p-5">
              <h3 className="font-heading text-sm font-semibold text-destructive mb-3">Risico's</h3>
              <ul className="space-y-2">
                {mockAnalysis.risks.map(r => (
                  <li key={r} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Positioning */}
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Hoe jezelf positioneren</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{mockAnalysis.positioning}</p>
          </div>

          {/* Next actions */}
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Volgende acties</h3>
            <div className="space-y-2">
              {["Opslaan in tracker", "Genereer CV op maat", "Schrijf motivatiebrief", "Bereid gesprek voor"].map(a => (
                <button key={a} className="w-full flex items-center gap-2 p-3 rounded-lg bg-muted/50 text-sm text-foreground hover:bg-accent transition-colors text-left">
                  <div className="w-4 h-4 rounded border border-border shrink-0" />
                  {a}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
