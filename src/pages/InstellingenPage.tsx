import { Settings, FileText, Trash2, Save } from "lucide-react";
import { useState } from "react";
import { useUser } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";

const tabbladen = ["Profiel & antwoorden", "Documenten", "Gegenereerd", "Notificaties", "Account"];

export default function InstellingenPage() {
  const [actief, setActief] = useState(0);
  const { profiel, updateProfiel, resetProfiel } = useUser();
  const navigate = useNavigate();

  const [naam, setNaam] = useState(profiel.naam);
  const [locatie, setLocatie] = useState(profiel.locatie);
  const [niveau, setNiveau] = useState(profiel.niveau);
  const [beschikbaarheid, setBeschikbaarheid] = useState(profiel.beschikbaarheid);

  function slaProfielOp() {
    updateProfiel({ naam, locatie, niveau, beschikbaarheid });
    alert("Profiel opgeslagen!");
  }

  function verwijderAccount() {
    if (confirm("Weet je zeker dat je alle gegevens wilt verwijderen? Dit is niet ongedaan te maken.")) {
      resetProfiel();
      navigate("/");
    }
  }

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" /> Instellingen
        </h1>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {tabbladen.map((t, i) => (
          <button key={t} onClick={() => setActief(i)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              actief === i ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground"
            }`}>
            {t}
          </button>
        ))}
      </div>

      {actief === 0 && (
        <div className="space-y-4">
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Basisgegevens</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground">Naam</label>
                <input className="w-full mt-1 p-2.5 rounded-lg bg-muted border border-border text-sm text-foreground"
                  value={naam} onChange={(e) => setNaam(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Locatie</label>
                <input className="w-full mt-1 p-2.5 rounded-lg bg-muted border border-border text-sm text-foreground"
                  value={locatie} onChange={(e) => setLocatie(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Niveau</label>
                <input className="w-full mt-1 p-2.5 rounded-lg bg-muted border border-border text-sm text-foreground"
                  value={niveau} onChange={(e) => setNiveau(e.target.value)} />
              </div>
              <div>
                <label className="text-xs text-muted-foreground">Beschikbaarheid</label>
                <input className="w-full mt-1 p-2.5 rounded-lg bg-muted border border-border text-sm text-foreground"
                  value={beschikbaarheid} onChange={(e) => setBeschikbaarheid(e.target.value)} />
              </div>
            </div>
            <button onClick={slaProfielOp}
              className="mt-4 flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
              <Save className="w-4 h-4" /> Opslaan
            </button>
          </div>

          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Energieprofiel</h3>
            <div className="flex flex-wrap gap-2 mb-2">
              {profiel.energiegevers.map((e) => (
                <span key={e} className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs">{e}</span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">
              Om je energieprofiel te wijzigen, doorloop je de onboarding opnieuw.
            </p>
            <button onClick={() => navigate("/onboarding")}
              className="mt-3 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors">
              Onboarding opnieuw doorlopen
            </button>
          </div>
        </div>
      )}

      {actief === 1 && (
        <div className="gradient-border-card p-5">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Geüploade documenten</h3>
          {profiel.cvSamenvatting ? (
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
              <FileText className="w-4 h-4 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm text-foreground">CV samenvatting</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{profiel.cvSamenvatting}</p>
              </div>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">Nog geen documenten geüpload.</p>
          )}
          <div className="mt-4 border-2 border-dashed border-border rounded-lg p-6 text-center text-sm text-muted-foreground cursor-pointer hover:border-primary/50 transition-colors">
            Sleep bestanden hierheen of klik om te uploaden
          </div>
        </div>
      )}

      {actief === 2 && (
        <div className="gradient-border-card p-5">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Gegenereerde documenten</h3>
          <p className="text-sm text-muted-foreground">Nog geen gegenereerde documenten. Start met de Vacature Analyzer of CV Studio.</p>
        </div>
      )}

      {actief === 3 && (
        <div className="gradient-border-card p-5">
          <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Notificaties</h3>
          <div className="space-y-3">
            {["Dagelijkse actielijst", "Wekelijkse voortgangsrapport", "Follow-up herinneringen", "Nieuwe vacature-matches"].map((n) => (
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

      {actief === 4 && (
        <div className="space-y-4">
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Account</h3>
            <p className="text-sm text-muted-foreground">
              Je gegevens worden lokaal opgeslagen in je browser. In een volgende versie kun je een account aanmaken om je data te synchroniseren.
            </p>
          </div>
          <div className="gradient-border-card p-5 border-destructive/20">
            <h3 className="font-heading text-sm font-semibold text-destructive mb-2 flex items-center gap-1.5">
              <Trash2 className="w-4 h-4" /> Alle gegevens verwijderen
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Dit verwijdert je profiel, onboarding-antwoorden en alle opgeslagen data permanent.
            </p>
            <button onClick={verwijderAccount}
              className="px-4 py-2 rounded-lg bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors">
              Alles verwijderen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
