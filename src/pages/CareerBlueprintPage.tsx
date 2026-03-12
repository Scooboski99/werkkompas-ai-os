import { Sparkles, Download, RefreshCw, AlertTriangle, CheckCircle, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const energyGivers = ["Klantcontact", "Problemen oplossen", "Projecten leiden", "Impact zien", "Samenwerken"];
const energyDrains = ["Repetitief werk", "Veel interne politiek", "Te veel administratie", "Geen zichtbare impact"];
const strengths = ["Verbindend", "Resultaatgericht", "Analytisch", "Klantgericht", "Procesmatig denken", "Stakeholder management"];

const goodFit = [
  "Rollen met een mix van klantcontact en projectcoördinatie",
  "Organisaties met een duidelijke missie en impact-focus",
  "Functies waar procesverbetering en strategisch denken samenkomen",
  "Werkomgevingen met autonomie én samenwerking",
];

const badFit = [
  "Puur administratieve functies zonder verbetermandaat",
  "Rollen met alleen interne focus en weinig klantinteractie",
  "Organisaties met sterke politieke cultuur en trage besluitvorming",
  "Functies zonder zichtbare resultaten of meetbare impact",
];

const clusters = [
  { title: "Implementatieconsultant", match: 89, desc: "Combineert procesverbetering met klantcontact" },
  { title: "Projectcoördinator (Impact)", match: 84, desc: "Operationele regie in missie-gedreven organisatie" },
  { title: "Customer Success Manager", match: 78, desc: "Strategische klantrelaties en proactieve optimalisatie" },
  { title: "Procesconsultant", match: 75, desc: "Analyseren, adviseren en verbeteren van werkprocessen" },
];

const sectors = ["Cultuur & musea", "Publieke sector", "Duurzaamheid & impact", "Sport & events", "Consultancy (impact-gericht)"];

const risks = [
  { title: "Overmatige focus op relatiebeheer", desc: "Kan leiden tot rollen zonder strategische diepgang. Zoek bewust naar functies met verbetermandaat." },
  { title: "Transitierisico", desc: "Overstap van Customer Success naar consultancy vraagt mogelijk aanvullende certificering of portfolio-bewijs." },
];

export default function CareerBlueprintPage() {
  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-primary" />
            <h1 className="font-heading text-2xl font-bold text-foreground">Career Blueprint</h1>
            <span className="ai-badge text-[10px]">AI-gegenereerd</span>
          </div>
          <p className="text-muted-foreground">Je persoonlijke loopbaananalyse op basis van jouw profiel</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <RefreshCw className="w-4 h-4" /> Bijwerken
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <Download className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>

      {/* Werkidentiteit */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Werkidentiteit</h2>
        <p className="text-muted-foreground leading-relaxed">
          Sanne is een verbindende professional met een sterke drive voor impact en procesverbetering. Ze haalt energie uit het begeleiden van klanten en stakeholders, het oplossen van complexe problemen, en het zien van concrete resultaten. Ze functioneert het best in omgevingen waar autonomie en samenwerking hand in hand gaan, en waar haar analytische kijk direct bijdraagt aan betere uitkomsten.
        </p>
      </section>

      {/* Energieprofiel */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Energieprofiel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-medium text-secondary mb-3 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4" /> Energiegevers
            </h3>
            <div className="space-y-2">
              {energyGivers.map(e => (
                <div key={e} className="px-3 py-2 rounded-lg bg-secondary/10 text-sm text-foreground">{e}</div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-medium text-destructive mb-3 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4" /> Energievreters
            </h3>
            <div className="space-y-2">
              {energyDrains.map(e => (
                <div key={e} className="px-3 py-2 rounded-lg bg-destructive/10 text-sm text-foreground">{e}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sterktepatroon */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Sterktepatroon</h2>
        <div className="flex flex-wrap gap-2">
          {strengths.map(s => (
            <span key={s} className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">{s}</span>
          ))}
        </div>
      </section>

      {/* Wat past / niet past */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <section className="gradient-border-card p-6">
          <h2 className="font-heading text-base font-semibold text-secondary mb-3">Wat waarschijnlijk goed past</h2>
          <ul className="space-y-2">
            {goodFit.map(g => (
              <li key={g} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                {g}
              </li>
            ))}
          </ul>
        </section>
        <section className="gradient-border-card p-6">
          <h2 className="font-heading text-base font-semibold text-destructive mb-3">Wat waarschijnlijk niet past</h2>
          <ul className="space-y-2">
            {badFit.map(b => (
              <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Kansrijke rolclusters */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4">Kansrijke rolclusters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {clusters.map(c => (
            <div key={c.title} className="p-4 rounded-lg bg-muted/50 hover:bg-accent transition-colors">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-foreground">{c.title}</h3>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${c.match >= 80 ? 'bg-secondary/20 text-secondary' : 'bg-primary/20 text-primary'}`}>
                  {c.match}%
                </span>
              </div>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/rolrichtingen" className="flex items-center gap-1 text-xs text-primary mt-4 hover:underline">
          Bekijk alle rolrichtingen <ArrowRight className="w-3 h-3" />
        </Link>
      </section>

      {/* Kansrijke sectoren */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Kansrijke sectoren</h2>
        <div className="flex flex-wrap gap-2">
          {sectors.map(s => (
            <span key={s} className="px-3 py-1.5 rounded-full bg-accent text-foreground text-sm">{s}</span>
          ))}
        </div>
      </section>

      {/* Ideale werkomgeving */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Ideale werkomgeving</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Een middelgrote tot grote organisatie met een heldere missie en zichtbare maatschappelijke impact. Informele cultuur met ruimte voor eigen initiatief, korte lijnen, en een team dat waarde hecht aan kwaliteit en samenwerking. Bij voorkeur een rol met zowel interne als externe stakeholders en een duidelijk verbetermandaat.
        </p>
      </section>

      {/* Risico's */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-destructive" /> Risico's en blinde vlekken
        </h2>
        <div className="space-y-3">
          {risks.map(r => (
            <div key={r.title} className="p-4 rounded-lg bg-destructive/5 border border-destructive/20">
              <h3 className="text-sm font-semibold text-foreground mb-1">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Realistische volgende stap */}
      <section className="gradient-border-card p-6 bg-primary/5">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-primary" />
          <h2 className="font-heading text-lg font-semibold text-foreground">Realistische volgende stap</h2>
        </div>
        <p className="text-sm text-foreground leading-relaxed mb-4">
          Solliciteer op <strong>Implementatieconsultant</strong> of <strong>Projectcoördinator</strong> posities bij organisaties in de cultuur- of publieke sector. Focus op vacatures die klantcontact combineren met procesverbetering en een helder verbetermandaat bieden.
        </p>
        <Link to="/vacature-analyzer" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity">
          Start vacature-analyse <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Lange termijn */}
      <section className="gradient-border-card p-6">
        <h2 className="font-heading text-lg font-semibold text-foreground mb-3">Lange termijn richting</h2>
        <p className="text-sm text-muted-foreground italic leading-relaxed">
          Op langere termijn past een senior advies- of programmmanagementrol waarin je strategische verandertrajecten begeleidt, teams aanstuurt, en direct impact hebt op organisatiedoelen. Denk aan: Senior Consultant Implementatie, Programmamanager, of Head of Customer Success bij een impact-gedreven organisatie.
        </p>
      </section>
    </div>
  );
}
