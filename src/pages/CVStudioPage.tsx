import { FileText, Sparkles, Download, Wand2, CheckCircle } from "lucide-react";

const sections = [
  { title: "Profiel", content: "Verbindende professional met 4+ jaar ervaring in Customer Success en procesverbetering. Sterk in stakeholder management, klantrelaties en het vertalen van complexe behoeften naar concrete oplossingen. PRINCE2- en Lean-gecertificeerd." },
  { title: "Werkervaring", items: [
    { role: "Customer Success Specialist", company: "TechCo B.V., Utrecht", period: "2022 – heden", bullets: [
      "Beheer van 45+ klantaccounts met een retentie van 94%",
      "Implementatie van gestructureerd onboarding-proces (doorlooptijd -30%)",
      "Cross-functionele samenwerking met product en sales voor klantgedreven verbeteringen",
    ]},
    { role: "Projectondersteuner", company: "Gemeente Utrecht", period: "2020 – 2022", bullets: [
      "Coördinatie van interne verbeterprojecten in het sociaal domein",
      "Stakeholder management met 15+ afdelingen",
      "Rapportage en procesbewaking voor wethouder",
    ]},
  ]},
  { title: "Opleiding", items: [
    { role: "BSc Bestuurskunde", company: "Universiteit Utrecht", period: "2016 – 2020", bullets: [] },
  ]},
];

export default function CVStudioPage() {
  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" /> CV Studio
          </h1>
          <p className="text-muted-foreground mt-1">Bouw en optimaliseer je CV, afgestemd op elke vacature</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
            <Wand2 className="w-4 h-4" /> Pas aan voor vacature
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Download className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Editor */}
        <div className="space-y-4">
          {sections.map(s => (
            <div key={s.title} className="gradient-border-card p-5">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-3">{s.title}</h3>
              {"content" in s && <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>}
              {"items" in s && s.items?.map(item => (
                <div key={item.role} className="mb-4 last:mb-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.role}</p>
                      <p className="text-xs text-muted-foreground">{item.company} · {item.period}</p>
                    </div>
                    <button className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Versterk
                    </button>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {item.bullets.map(b => (
                      <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-muted-foreground mt-1.5">•</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}

          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Certificeringen & Vaardigheden</h3>
            <div className="flex flex-wrap gap-2">
              {["PRINCE2 Foundation", "Lean Yellow Belt", "Stakeholder Management", "Procesoptimalisatie", "Klantrelatiebeheer", "Data-analyse"].map(s => (
                <span key={s} className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* ATS Score */}
          <div className="gradient-border-card p-5 flex items-center gap-4">
            <CheckCircle className="w-5 h-5 text-secondary" />
            <div>
              <p className="text-sm font-medium text-foreground">ATS Score: 87/100</p>
              <p className="text-xs text-muted-foreground">Goed geoptimaliseerd voor applicant tracking systemen</p>
            </div>
            <span className="ai-badge ml-auto text-[10px]">Mock</span>
          </div>
        </div>

        {/* Preview */}
        <div className="gradient-border-card p-8 bg-foreground/[0.02]">
          <div className="space-y-6">
            <div className="text-center border-b border-border pb-4">
              <h2 className="font-heading text-xl font-bold text-foreground">Sanne van der Berg</h2>
              <p className="text-sm text-muted-foreground">Utrecht · sanne@email.nl · 06-12345678</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Profiel</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{sections[0].content}</p>
            </div>
            <div>
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3">Werkervaring</h3>
              {"items" in sections[1] && sections[1].items?.map(item => (
                <div key={item.role} className="mb-4">
                  <p className="text-sm font-semibold text-foreground">{item.role}</p>
                  <p className="text-xs text-muted-foreground mb-1">{item.company} · {item.period}</p>
                  <ul className="space-y-0.5">
                    {item.bullets.map(b => (
                      <li key={b} className="text-xs text-muted-foreground">• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
