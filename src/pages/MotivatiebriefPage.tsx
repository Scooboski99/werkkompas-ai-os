import { PenTool, Sparkles, Download, Copy, Wand2 } from "lucide-react";
import { useState } from "react";

const drieluik = {
  waaromIk: "Met meer dan vier jaar ervaring in Customer Success en procesverbetering breng ik een unieke combinatie van analytisch vermogen en klantgerichtheid mee. Bij TechCo B.V. heb ik bewezen dat ik complexe klantrelaties kan omzetten in meetbare resultaten: een retentie van 94% en een 30% sneller onboarding-proces. Mijn PRINCE2- en Lean-certificeringen onderbouwen mijn gestructureerde aanpak.",
  waaromJullie: "Berenschot spreekt mij aan vanwege de combinatie van inhoudelijke diepgang en maatschappelijke relevantie. De focus op implementatie — niet alleen advies — sluit perfect aan bij mijn overtuiging dat verandering pas waarde heeft als het daadwerkelijk landt. De diverse opdrachtportefeuille biedt precies de variatie en het leervermogen dat ik zoek.",
  waaromNu: "Na vier jaar operationele ervaring ben ik klaar voor de stap naar een strategischere adviesrol. Ik zoek bewust een omgeving waarin ik mijn ervaring met klantcontact en procesverbetering kan inzetten op een hoger abstractieniveau, met meer impact per project. Berenschot biedt die stap.",
};

export default function MotivatiebriefPage() {
  const [format, setFormat] = useState<"drieluik" | "klassiek">("drieluik");

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground flex items-center gap-2">
            <PenTool className="w-5 h-5 text-primary" /> Motivatiebrief Studio
          </h1>
          <p className="text-muted-foreground mt-1">Genereer een overtuigende motivatiebrief op basis van je profiel</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Copy className="w-4 h-4" /> Kopieer
          </button>
          <button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Download className="w-4 h-4" /> PDF
          </button>
        </div>
      </div>

      {/* Format selector */}
      <div className="flex gap-2">
        <button onClick={() => setFormat("drieluik")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${format === "drieluik" ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
          Drieluik-format
        </button>
        <button onClick={() => setFormat("klassiek")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${format === "klassiek" ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
          Klassiek
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="ai-badge"><Sparkles className="w-3 h-3" /> AI-gegenereerde brief</span>
        <span className="text-xs text-muted-foreground">• Vacature: Implementatieconsultant bij Berenschot</span>
      </div>

      {format === "drieluik" ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {[
            { title: "Waarom ik", content: drieluik.waaromIk, color: "primary" },
            { title: "Waarom jullie", content: drieluik.waaromJullie, color: "secondary" },
            { title: "Waarom nu", content: drieluik.waaromNu, color: "primary" },
          ].map(panel => (
            <div key={panel.title} className="gradient-border-card p-5">
              <h3 className={`font-heading text-sm font-semibold mb-3 text-${panel.color}`}>{panel.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{panel.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="gradient-border-card p-6">
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {`Geachte heer/mevrouw,\n\n${drieluik.waaromIk}\n\n${drieluik.waaromJullie}\n\n${drieluik.waaromNu}\n\nGraag licht ik mijn motivatie toe in een persoonlijk gesprek.\n\nMet vriendelijke groet,\nSanne van der Berg`}
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-wrap gap-2">
        {["Maak directer", "Maak formeler", "Maak beknopter", "Herschrijf volledig"].map(c => (
          <button key={c} className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
            <Wand2 className="w-3.5 h-3.5" /> {c}
          </button>
        ))}
      </div>
    </div>
  );
}
