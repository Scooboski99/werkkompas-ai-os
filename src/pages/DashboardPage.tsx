import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, TrendingUp, CheckCircle, Send, UserCircle } from "lucide-react";
import { useUser } from "@/context/UserContext";

const acties = [
  { title: "Analyseer een vacature die je interesseert", icon: Send },
  { title: "Bekijk je Career Blueprint", icon: Sparkles },
  { title: "Verken passende rolrichtingen", icon: TrendingUp },
];

export default function DashboardPage() {
  const { profiel, voornaam } = useUser();

  const voortgangItems = [
    { label: "Basisgegevens", done: !!profiel.naam },
    { label: "Energieprofiel", done: profiel.energiegevers.length > 0 },
    { label: "Sectorvoorkeuren", done: profiel.sectoren.length > 0 },
    { label: "CV upload", done: !!profiel.cvSamenvatting },
    { label: "Ambitie", done: !!profiel.ambitie },
  ];

  const profielCompleet = profiel.isCompleted;

  function genereerSamenvatting() {
    if (!profielCompleet) return "Vul je profiel aan om je persoonlijke Career Blueprint te ontvangen.";
    const gevers = profiel.energiegevers.slice(0, 2).join(" en ").toLowerCase();
    const sector = profiel.sectoren[0]?.toLowerCase() || "je gewenste sector";
    return `${voornaam} haalt energie uit ${gevers || "verbindend werk"} en is op zoek naar een rol in ${sector}. Je Blueprint is klaar om te bekijken.`;
  }

  return (
    <div className="space-y-6">
      {/* Welcome banner */}
      <div className="gradient-border-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Welkom terug, {voornaam} 👋
          </h1>
          <p className="text-muted-foreground mt-1">
            {profielCompleet
              ? "Je profiel is compleet. Klaar voor de volgende stap."
              : "Maak je profiel compleet om je Career Blueprint te activeren."}
          </p>
        </div>
        <Link
          to="/blueprint"
          className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
        >
          <Sparkles className="w-4 h-4" /> Bekijk Blueprint
        </Link>
      </div>

      {/* Onboarding nudge */}
      {!profielCompleet && (
        <div className="gradient-border-card p-5 border-primary/30 bg-primary/5">
          <div className="flex items-start gap-3">
            <UserCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground mb-1">Je profiel is nog niet volledig ingevuld</p>
              <p className="text-xs text-muted-foreground mb-3">Doorloop de onboarding zodat WerkKompas jou écht kan helpen.</p>
              <Link
                to="/onboarding"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Profiel aanvullen <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="space-y-6">
          <div className="gradient-border-card p-5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-sm font-semibold text-foreground">Career Blueprint</h3>
              <span className="ai-badge ml-auto text-[10px]">AI</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {genereerSamenvatting()}
            </p>
            <Link to="/blueprint" className="flex items-center gap-1 text-xs text-primary mt-3 hover:underline">
              Volledig blueprint <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Profiel voortgang</h3>
            <div className="space-y-2">
              {voortgangItems.map((item) => (
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
          <div className="gradient-border-card p-5">
            <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Aanbevolen acties</h3>
            <div className="space-y-3">
              {acties.map((a, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent transition-colors">
                  <a.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground">{a.title}</p>
                </div>
              ))}
            </div>
          </div>

          {profiel.energiegevers.length > 0 && (
            <div className="gradient-border-card p-5">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Jouw energiegevers</h3>
              <div className="flex flex-wrap gap-2">
                {profiel.energiegevers.map((e) => (
                  <span key={e} className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">{e}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {profiel.sectoren.length > 0 && (
            <div className="gradient-border-card p-5">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Sectorinteresses</h3>
              <div className="flex flex-wrap gap-2">
                {profiel.sectoren.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full bg-accent text-foreground text-xs">{s}</span>
                ))}
              </div>
            </div>
          )}

          {profiel.ambitie && (
            <div className="gradient-border-card p-5 bg-primary/5">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                <h3 className="font-heading text-sm font-semibold text-foreground">Jouw ambitie</h3>
              </div>
              <p className="text-sm text-muted-foreground">{profiel.ambitie}</p>
            </div>
          )}

          {profiel.salaris > 0 && (
            <div className="gradient-border-card p-5">
              <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Randvoorwaarden</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                {profiel.salaris && <p>💰 €{profiel.salaris.toLocaleString()} / maand</p>}
                {profiel.locatie && <p>📍 {profiel.locatie}</p>}
                {profiel.beschikbaarheid && <p>🕐 {profiel.beschikbaarheid}</p>}
                {profiel.niveau && <p>📊 {profiel.niveau}</p>}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
