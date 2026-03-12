import { MessageSquare, Sparkles, AlertTriangle, CheckCircle, HelpCircle } from "lucide-react";

const questions = [
  { q: "Vertel eens over jezelf?", hint: "Focus op je professionele verhaal: van Customer Success naar strategisch advies." },
  { q: "Waarom wil je bij ons werken?", hint: "Koppel hun missie aan jouw waarden. Noem specifieke projecten." },
  { q: "Wat is je grootste kracht?", hint: "Verbindend vermogen — geef een concreet voorbeeld met resultaat." },
  { q: "Waar zie je jezelf over 5 jaar?", hint: "Senior consultant of programmamanager. Toon ambitie maar blijf realistisch." },
  { q: "Vertel over een uitdagend project", hint: "Gebruik STAR: het onboarding-verbetertraject bij TechCo." },
  { q: "Hoe ga je om met weerstand?", hint: "Luisteren, begrijpen, meenemen. Voorbeeld van stakeholder management." },
  { q: "Wat weet je over onze organisatie?", hint: "Bereid specifieke feiten voor over recente projecten en publicaties." },
  { q: "Waarom verlaat je je huidige baan?", hint: "Positief framen: groei, niet vlucht. Focus op de stap naar advies." },
  { q: "Hoe werk je samen in een team?", hint: "Geef een voorbeeld van cross-functionele samenwerking." },
  { q: "Heb je nog vragen voor ons?", hint: "Stel slimme vragen over projectmethodiek en teamcultuur." },
];

const smartQuestions = [
  "Hoe is de verhouding tussen advies en implementatie in jullie projecten?",
  "Hoe ziet het inwerktraject eruit voor nieuwe consultants?",
  "Welke projecten liggen er voor dit team in het komende kwartaal?",
  "Hoe wordt feedback en persoonlijke groei gefaciliteerd?",
  "Wat maakt de succesvolste consultants in jullie team bijzonder?",
];

export default function InterviewCoachPage() {
  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-primary" /> Interview Coach
        </h1>
        <p className="text-muted-foreground mt-1">Voorbereiding voor: Implementatieconsultant bij Berenschot</p>
        <span className="ai-badge mt-2 inline-flex"><Sparkles className="w-3 h-3" /> AI-gegenereerd</span>
      </div>

      {/* Opening */}
      <div className="gradient-border-card p-5">
        <h3 className="font-heading text-sm font-semibold text-foreground mb-2">Openingsverhaal</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          "Ik ben Sanne, en de afgelopen vier jaar heb ik bij TechCo en de Gemeente Utrecht geleerd hoe je klantrelaties en interne processen meetbaar kunt verbeteren. Wat me drijft is de combinatie van analytisch denken en menselijk contact — en ik zoek nu een omgeving waarin ik dat op strategisch niveau kan inzetten."
        </p>
      </div>

      {/* Expected questions */}
      <div className="gradient-border-card p-5">
        <h3 className="font-heading text-sm font-semibold text-foreground mb-4">Top 10 verwachte vragen</h3>
        <div className="space-y-2">
          {questions.map((q, i) => (
            <details key={i} className="group">
              <summary className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-accent cursor-pointer transition-colors list-none">
                <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <span className="text-sm text-foreground flex-1">{q.q}</span>
                <HelpCircle className="w-4 h-4 text-muted-foreground group-open:text-primary transition-colors shrink-0" />
              </summary>
              <div className="px-12 py-3">
                <p className="text-sm text-muted-foreground">{q.hint}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Critical prep */}
      <div className="gradient-border-card p-5">
        <h3 className="font-heading text-sm font-semibold text-destructive mb-3 flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4" /> Kritische vragen om op voorbereid te zijn
        </h3>
        <ul className="space-y-2">
          {["Je hebt geen directe consultancy-ervaring. Hoe compenseer je dat?", "Hoe ga je om met de druk van billable hours?"].map(q => (
            <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground">
              <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" /> {q}
            </li>
          ))}
        </ul>
      </div>

      {/* Smart questions */}
      <div className="gradient-border-card p-5">
        <h3 className="font-heading text-sm font-semibold text-foreground mb-3">Slimme vragen om terug te stellen</h3>
        <ol className="space-y-2">
          {smartQuestions.map((q, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary font-medium shrink-0">{i + 1}.</span> {q}
            </li>
          ))}
        </ol>
      </div>

      {/* 24h checklist */}
      <div className="gradient-border-card p-5 bg-primary/5">
        <h3 className="font-heading text-sm font-semibold text-foreground mb-3">24-uurs check</h3>
        <div className="space-y-2">
          {["Bedrijfswebsite en recente nieuwsberichten gelezen", "Route en reistijd gecontroleerd", "Outfit klaargelegd", "Kopie CV en brief geprint", "Openingsverhaal hardop geoefend", "Eigen vragen opgeschreven"].map(c => (
            <div key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-4 h-4 rounded border border-border shrink-0" />
              {c}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
