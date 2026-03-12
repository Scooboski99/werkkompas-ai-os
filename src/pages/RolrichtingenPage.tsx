import { Target, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const clusters = [
  {
    title: "Implementatieconsultant / Procesverbeteraar",
    match: 89,
    why: ["Combineert procesverbetering met klantcontact", "Analytische en verbindende kwaliteiten worden direct benut", "Zichtbare impact op organisaties"],
    responsibilities: ["Analyseren van werkprocessen bij klanten", "Begeleiden van implementatietrajecten", "Stakeholder management en rapportage"],
    adjacent: ["Change Consultant", "Business Analyst", "Transitiemanager"],
    sectors: ["Consultancy", "Publieke sector", "Gezondheidszorg"],
    caution: ["Kan politiek geladen zijn in grote organisaties", "Soms veel reizen"],
  },
  {
    title: "Projectcoördinator (Impact / Cultuur)",
    match: 84,
    why: ["Operationele regie in missie-gedreven context", "Mix van autonomie en teamwerk", "Concrete resultaten zichtbaar"],
    responsibilities: ["Coördineren van projecten en werkstromen", "Aanspreekpunt voor interne en externe stakeholders", "Bewaken van planning, budget en kwaliteit"],
    adjacent: ["Programmacoördinator", "Projectmanager", "Eventcoördinator"],
    sectors: ["Cultuur & musea", "Publieke sector", "Sport & events"],
    caution: ["Kan operationeel blijven hangen zonder strategische groei"],
  },
  {
    title: "Customer Success Manager (Strategisch)",
    match: 78,
    why: ["Bouwt voort op bewezen ervaring", "Klantrelatie + procesoptimalisatie", "Duidelijke impact op retentie en groei"],
    responsibilities: ["Strategisch accountmanagement", "Proactieve klantbegeleiding", "Cross-functionele samenwerking"],
    adjacent: ["Account Manager", "Client Partner", "Relatiebeheerder"],
    sectors: ["SaaS / Tech", "Consultancy", "Scale-ups"],
    caution: ["Risico op terugval naar operationeel niveau"],
  },
  {
    title: "Procesconsultant",
    match: 75,
    why: ["Analyseren en adviseren sluit aan bij sterktes", "Lean-certificering is een voordeel", "Breed inzetbaar"],
    responsibilities: ["Procesanalyses uitvoeren", "Verbetervoorstellen formuleren", "Workshops faciliteren"],
    adjacent: ["Lean Consultant", "Kwaliteitsadviseur", "Organisatieadviseur"],
    sectors: ["Gezondheidszorg", "Publieke sector", "Productie"],
    caution: ["Kan te abstract blijven zonder implementatiemandaat"],
  },
];

export default function RolrichtingenPage() {
  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" /> Rolrichtingen & Clusters
        </h1>
        <p className="text-muted-foreground mt-1">Op basis van je Career Blueprint: de richtingen die het beste bij jou passen.</p>
      </div>

      <div className="space-y-4">
        {clusters.map(c => (
          <details key={c.title} className="gradient-border-card group" open={c.match >= 85}>
            <summary className="p-5 cursor-pointer list-none flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${c.match >= 80 ? 'bg-secondary/20 text-secondary' : c.match >= 60 ? 'bg-primary/20 text-primary' : 'bg-destructive/20 text-destructive'}`}>
                {c.match}%
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-base font-semibold text-foreground">{c.title}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{c.why[0]}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-open:rotate-90 transition-transform shrink-0" />
            </summary>
            <div className="px-5 pb-5 space-y-4 border-t border-border pt-4">
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">Waarom dit past</h4>
                <ul className="space-y-1">
                  {c.why.map(w => (
                    <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" /> {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">Typische verantwoordelijkheden</h4>
                <ul className="space-y-1">
                  {c.responsibilities.map(r => (
                    <li key={r} className="text-sm text-muted-foreground pl-4">• {r}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-4">
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-1.5">Verwante titels</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {c.adjacent.map(a => <span key={a} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs">{a}</span>)}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground mb-1.5">Sectoren</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {c.sectors.map(s => <span key={s} className="px-2 py-0.5 rounded-full bg-accent text-foreground text-xs">{s}</span>)}
                  </div>
                </div>
              </div>
              {c.caution.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold text-destructive mb-1.5 flex items-center gap-1"><AlertTriangle className="w-3 h-3" /> Let op</h4>
                  {c.caution.map(ca => <p key={ca} className="text-sm text-muted-foreground">{ca}</p>)}
                </div>
              )}
              <Link to="/vacature-analyzer" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
                Zoek vacatures in deze richting <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
