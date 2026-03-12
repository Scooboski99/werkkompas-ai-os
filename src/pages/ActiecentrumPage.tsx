import { ListChecks, Send, Clock, FileText, Building2, ArrowRight, TrendingUp } from "lucide-react";
import { useState } from "react";

const columns = [
  { title: "Vandaag", icon: Send, tasks: [
    { title: "Reageer op Implementatieconsultant — Berenschot", why: "Hoge match score (84%), deadline nadert", category: "Sollicitatie", due: "Vandaag" },
    { title: "Update CV voor cultuursector focus", why: "Nodig voor volgende 2 sollicitaties", category: "Document", due: "Vandaag" },
  ]},
  { title: "Deze week", icon: Clock, tasks: [
    { title: "Schrijf motivatiebrief Gemeente Utrecht", why: "Vacature sluit vrijdag", category: "Document", due: "Do 13 mrt" },
    { title: "Informeel gesprek plannen — Centraal Museum", why: "Netwerk uitbreiden in cultuursector", category: "Netwerk", due: "Vr 14 mrt" },
  ]},
  { title: "Wacht op reactie", icon: Clock, tasks: [
    { title: "Rijksmuseum — Projectcoördinator", why: "Sollicitatie verstuurd op 7 mrt", category: "Follow-up", due: "Check 14 mrt" },
  ]},
  { title: "Follow-up nodig", icon: TrendingUp, tasks: [
    { title: "Channable — Customer Success Lead", why: "Geen reactie na 2 weken", category: "Follow-up", due: "Overdue" },
  ]},
];

const categoryColors: Record<string, string> = {
  Sollicitatie: "bg-primary/10 text-primary",
  Document: "bg-secondary/10 text-secondary",
  Netwerk: "bg-accent text-foreground",
  "Follow-up": "bg-destructive/10 text-destructive",
};

export default function ActiecentrumPage() {
  const [view, setView] = useState<"list" | "kanban">("list");

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
            <ListChecks className="w-5 h-5 text-primary" /> Actiecentrum
          </h1>
          <p className="text-muted-foreground mt-1">Alles wat je moet doen, op één plek</p>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setView("list")} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${view === "list" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>Lijst</button>
          <button onClick={() => setView("kanban")} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${view === "kanban" ? "bg-primary/10 text-primary" : "text-muted-foreground"}`}>Kanban</button>
        </div>
      </div>

      {/* Weekly digest */}
      <div className="gradient-border-card p-5 bg-primary/5">
        <p className="text-sm text-foreground">
          <strong>Weekfocus:</strong> 2 sollicitaties versturen, 1 follow-up, 1 informeel gesprek plannen, 2 documenten bijwerken.
        </p>
      </div>

      {view === "kanban" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {columns.map(col => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-3 flex items-center gap-1.5">
                <col.icon className="w-4 h-4 text-primary" /> {col.title}
                <span className="ml-auto text-xs text-muted-foreground">{col.tasks.length}</span>
              </h3>
              <div className="space-y-2">
                {col.tasks.map(t => (
                  <div key={t.title} className="gradient-border-card p-3 space-y-2">
                    <p className="text-sm text-foreground font-medium">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.why}</p>
                    <div className="flex items-center justify-between">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${categoryColors[t.category] || ""}`}>{t.category}</span>
                      <span className={`text-[10px] ${t.due === "Overdue" ? "text-destructive" : "text-muted-foreground"}`}>{t.due}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {columns.map(col => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold text-foreground mb-2 flex items-center gap-1.5">
                <col.icon className="w-4 h-4 text-primary" /> {col.title}
              </h3>
              <div className="space-y-2">
                {col.tasks.map(t => (
                  <div key={t.title} className="gradient-border-card p-4 flex items-center gap-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{t.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{t.why}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium shrink-0 ${categoryColors[t.category] || ""}`}>{t.category}</span>
                    <span className={`text-xs shrink-0 ${t.due === "Overdue" ? "text-destructive" : "text-muted-foreground"}`}>{t.due}</span>
                    <button className="shrink-0 p-1.5 rounded-lg hover:bg-accent transition-colors">
                      <ArrowRight className="w-4 h-4 text-primary" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
