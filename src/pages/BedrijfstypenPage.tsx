import { Building2, CheckCircle, AlertTriangle, ChevronDown } from "lucide-react";

const types = [
  { name: "Innovatiebureau", icon: "🚀", fit: "Sanne's drive voor impact en verbetering past goed bij de dynamische cultuur van innovatiebureaus. Haar analytische kijk en klantgerichtheid zijn hier waardevol.", risks: ["Kan chaotisch zijn zonder duidelijke structuur", "Hoog tempo kan energie kosten"], examples: ["Innovatielab Utrecht", "FutureLab NL", "Spark Consultancy"], research: "Vraag naar hun projectmethodiek en hoe ze omgaan met klantfeedback." },
  { name: "Cultuurinstelling", icon: "🎭", fit: "Past bij Sanne's interesse in cultuur en haar wens om met betekenisvol werk bezig te zijn. Stakeholder management is hier cruciaal.", risks: ["Soms traag in besluitvorming", "Beperkte groeimogelijkheden"], examples: ["Rijksmuseum", "Centraal Museum", "Het HEM"], research: "Onderzoek de financieringsstructuur en vraag naar interne veranderprojecten." },
  { name: "Publieke sector", icon: "🏛️", fit: "Grote impact, complexe stakeholderomgevingen, en duidelijke verbeterambities. Past bij Sanne's analytische en procesmatige kwaliteiten.", risks: ["Politieke dynamieken kunnen frustrerend zijn", "Lange doorlooptijden"], examples: ["Gemeente Utrecht", "Provincie Noord-Holland", "UWV"], research: "Vraag naar de organisatiecultuur binnen het specifieke team, niet alleen de instelling." },
  { name: "Zorgorganisatie", icon: "🏥", fit: "Procesverbetering in de zorg heeft directe impact. Lean-certificering is een pré.", risks: ["Hoge werkdruk en emotionele belasting", "Soms rigide hiërarchie"], examples: ["UMC Utrecht", "Reinier Haga", "Parnassia Groep"], research: "Vraag naar de ruimte voor verbeterprojecten en de steun vanuit management." },
  { name: "Scale-up", icon: "⚡", fit: "Snelle groei biedt kansen voor impact. Breed inzetbaar en veel eigenaarschap mogelijk.", risks: ["Structuur kan ontbreken", "Wisselende prioriteiten"], examples: ["Channable", "Bux", "Mollie"], research: "Vraag naar de fase van groei en hoe het team is georganiseerd." },
  { name: "Impact consultancy", icon: "🌍", fit: "Perfecte match voor Sanne's waarden: impact, klantcontact, en strategisch advies gecombineerd.", risks: ["Projectmatig werk kan onzekerheid geven", "Reistijd"], examples: ["Berenschot", "Andersson Elffers Felix", "Rebel Group"], research: "Vraag naar de verhouding tussen advies en implementatie in hun projecten." },
];

export default function BedrijfstypenPage() {
  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
          <Building2 className="w-5 h-5 text-primary" /> Bedrijfstypen & Sectoren
        </h1>
        <p className="text-muted-foreground mt-1">Welke typen organisaties passen bij jouw profiel en voorkeuren?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {types.map(t => (
          <div key={t.name} className="gradient-border-card p-5 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{t.icon}</span>
              <h3 className="font-heading text-base font-semibold text-foreground">{t.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.fit}</p>
            <div>
              <h4 className="text-xs font-semibold text-destructive flex items-center gap-1 mb-1"><AlertTriangle className="w-3 h-3" /> Risico's</h4>
              {t.risks.map(r => <p key={r} className="text-xs text-muted-foreground">• {r}</p>)}
            </div>
            <div>
              <h4 className="text-xs font-semibold text-foreground mb-1">Voorbeeldbedrijven <span className="text-muted-foreground font-normal">(demo)</span></h4>
              <div className="flex flex-wrap gap-1.5">
                {t.examples.map(e => <span key={e} className="px-2 py-0.5 rounded-full bg-accent text-foreground text-xs">{e}</span>)}
              </div>
            </div>
            <details className="group">
              <summary className="text-xs text-primary cursor-pointer flex items-center gap-1 hover:underline">
                Wat te onderzoeken <ChevronDown className="w-3 h-3 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="text-xs text-muted-foreground mt-2">{t.research}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
