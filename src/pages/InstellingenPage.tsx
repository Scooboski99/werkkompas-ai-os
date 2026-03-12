import { Settings, FileText, Bell, User, Trash2 } from "lucide-react";
import { useState } from "react";

const tabs = ["Profiel & antwoorden", "Documenten", "Gegenereerd", "Notificaties", "Account"];

export default function InstellingenPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" /> Instellingen
        </h1>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabs.map((t, i) => (
          <button key={t} onClick={() => setActiveTab(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${activeTab === i ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
            {t}
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <div className="space-y-4">
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Basisgegevens</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Naam", value: "Sanne van der Berg" },
                { label: "Locatie", value: "Utrecht" },
                { label: "Niveau", value: "Medior" },
                { label: "Beschikbaarheid", value: "Fulltime" },
              ].map(f => (
                <div key={f.label}>
                  <label className="text-xs text-muted-foreground">{f.label}</label>
                  <input className="w-full mt-1 p-2.5 rounded-lg bg-muted border border-border text-sm text-foreground" defaultValue={f.value} />
                </div>
              ))}
            </div>
          </div>
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Onboarding-antwoorden</h3>
            <p className="text-sm text-muted-foreground">Je kunt je onboarding-antwoorden opnieuw doorlopen om je Career Blueprint te verbeteren.</p>
            <button className="mt-3 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium">Onboarding opnieuw doorlopen</button>
          </div>
        </div>
      )}

      {activeTab === 1 && (
        <div className="gradient-border-card p-5">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Geüploade documenten</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm text-foreground">CV_Sanne_2026.pdf</p>
                <p className="text-xs text-muted-foreground">Geüpload op 8 mrt 2026</p>
              </div>
            </div>
          </div>
          <div className="mt-4 border-2 border-dashed border-border rounded-lg p-6 text-center text-sm text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors">
            Sleep bestanden hierheen of klik om te uploaden
          </div>
        </div>
      )}

      {activeTab === 2 && (
        <div className="gradient-border-card p-5">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Gegenereerde documenten</h3>
          <div className="space-y-2">
            {[
              { name: "CV — Impactsector focus", date: "11 mrt 2026" },
              { name: "Motivatiebrief Berenschot", date: "10 mrt 2026" },
              { name: "Interview Pack — Gemeente Utrecht", date: "9 mrt 2026" },
            ].map(d => (
              <div key={d.name} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <FileText className="w-4 h-4 text-muted-foreground" />
                <div className="flex-1">
                  <p className="text-sm text-foreground">{d.name}</p>
                  <p className="text-xs text-muted-foreground">{d.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div className="gradient-border-card p-5">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Notificaties</h3>
          <div className="space-y-3">
            {["Dagelijkse actielijst", "Wekelijkse voortgangsrapport", "Follow-up herinneringen", "Nieuwe vacature-matches"].map(n => (
              <div key={n} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                <span className="text-sm text-foreground">{n}</span>
                <div className="w-10 h-5 rounded-full bg-secondary/30 relative cursor-pointer">
                  <div className="w-4 h-4 rounded-full bg-secondary absolute top-0.5 right-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 4 && (
        <div className="space-y-4">
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Account</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs text-muted-foreground">E-mail</label>
                <input className="w-full mt-1 p-2.5 rounded-lg bg-muted border border-border text-sm text-foreground" defaultValue="sanne@email.nl" />
              </div>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium">Wachtwoord wijzigen</button>
            </div>
          </div>
          <div className="gradient-border-card p-5 border-destructive/20">
            <h3 className="font-heading text-sm font-semibold text-destructive mb-2 flex items-center gap-1.5"><Trash2 className="w-4 h-4" /> Account verwijderen</h3>
            <p className="text-xs text-muted-foreground mb-3">Dit verwijdert al je gegevens permanent.</p>
            <button className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">Account verwijderen</button>
          </div>
        </div>
      )}
    </div>
  );
}
