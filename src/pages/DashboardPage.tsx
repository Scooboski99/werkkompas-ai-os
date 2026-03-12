import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, FileText, Clock, TrendingUp, CheckCircle, AlertCircle, Send, MessageSquare } from "lucide-react";

const demoActions = [
  { title: "Reageer op Projectcoördinator bij Museum Boijmans", priority: "hoog", icon: Send },
  { title: "Volg op: sollicitatie Rijksmuseum (3 dagen)", icon: Clock },
  { title: "Update CV voor impactsector-vacatures", icon: FileText },
];

const savedVacancies = [
  { title: "Implementatieconsultant", company: "Berenschot", score: 87, verdict: "Solliciteer" },
  { title: "Projectcoördinator Duurzaamheid", company: "Gemeente Utrecht", score: 79, verdict: "Overweeg" },
  { title: "Customer Success Lead", company: "Channable", score: 72, verdict: "Overweeg" },
];

const recentDocs = [
  { title: "CV — Impactsector focus", date: "11 mrt 2026" },
  { title: "Motivatiebrief Berenschot", date: "10 mrt 2026" },
  { title: "Interview prep Gemeente Utrecht", date: "9 mrt 2026" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="gradient-border-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Welkom terug, Sanne</h1>
          <p className="text-muted-foreground mt-1">Je hebt 2 openstaande acties en 1 follow-up deze week.</p>
        </div>
        <Link to="/blueprint" className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
          <Sparkles className="w-4 h-4" /> Bekijk Blueprint
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          {/* Blueprint summary */}
          <div className="gradient-border-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-sm font-semibold text-foreground">Career Blueprint</h3>
              <span className="ai-badge ml-auto text-[10px]">AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Sanne is een verbindende professional met een sterke drive voor impact en procesverbetering. Past het beste in rollen waar klantcontact, projectcoördinatie en strategisch denken samenkomen.
            </p>
            <Link to="/blueprint" className="flex items-center gap-1 text-xs text-primary mt-3 hover:underline">
              Volledig blueprint <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Profile completion */}
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Profiel voortgang</h3>
            <div className="space-y-2">
              {[
                { label: "Basisgegevens", done: true },
                { label: "Energieprofiel", done: true },
                { label: "Sectorvoorkeuren", done: true },
                { label: "CV upload", done: false },
                { label: "Werkervaring details", done: false },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-2 text-sm">
                  {item.done
                    ? <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                    : <div className="w-4 h-4 rounded-full border border-border shrink-0" />
                  }
                  <span className={item.done ? "text-foreground" : "text-muted-foreground"}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center column */}
        <div className="space-y-6">
          {/* Actions */}
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Vandaag te doen</h3>
            <div className="space-y-3">
              {demoActions.map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors">
                  <a.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground">{a.title}</p>
                    {"priority" in a && (
                      <span className="text-xs text-destructive font-medium">Hoge prioriteit</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saved vacancies */}
          <div className="gradient-border-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading text-sm font-semibold text-foreground">Opgeslagen vacatures</h3>
              <Link to="/vacature-analyzer" className="text-xs text-primary hover:underline">Alles →</Link>
            </div>
            <div className="space-y-3">
              {savedVacancies.map((v, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground">{v.title}</p>
                    <p className="text-xs text-muted-foreground">{v.company}</p>
                  </div>
                  <div className={`px-2 py-0.5 rounded-full text-xs font-medium ${v.score >= 80 ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                    {v.score}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Pipeline */}
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Pipeline</h3>
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Opgestuurd", count: 4, color: "text-primary" },
                { label: "Reactie", count: 1, color: "text-secondary" },
                { label: "Gesprek", count: 1, color: "text-secondary" },
              ].map(p => (
                <div key={p.label} className="p-3 rounded-lg bg-muted/50">
                  <p className={`font-heading text-2xl font-bold ${p.color}`}>{p.count}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 p-3 rounded-lg bg-destructive/10 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-destructive shrink-0" />
              <p className="text-xs text-destructive">2 follow-ups deze week</p>
            </div>
          </div>

          {/* Recent documents */}
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Recent gegenereerd</h3>
            <div className="space-y-2">
              {recentDocs.map((d, i) => (
                <div key={i} className="flex items-center gap-3 p-2">
                  <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-foreground truncate">{d.title}</p>
                    <p className="text-xs text-muted-foreground">{d.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly focus */}
          <div className="gradient-border-card p-5 bg-primary/5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-sm font-semibold text-foreground">Weekfocus</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              2 sollicitaties versturen, 1 follow-up, 3 nieuwe vacatures verkennen in de cultuursector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
