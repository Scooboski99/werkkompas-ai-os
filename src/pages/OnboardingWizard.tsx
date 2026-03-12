import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Upload, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TOTAL_STEPS = 9;

interface StepProps {
  onNext: () => void;
  onBack: () => void;
  step: number;
}

function StepSituatie({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string | null>(null);
  const options = [
    "Ik weet wat ik wil, maar weet niet hoe ik daar kom",
    "Ik twijfel tussen meerdere richtingen",
    "Ik weet vooral wat ik NIET wil",
    "Ik ben klaar voor een nieuwe stap maar weet nog niet welke",
    "Ik zoek actief en wil slimmer solliciteren",
  ];
  return (
    <StepLayout title="Hoe zou jij jouw situatie nu omschrijven?" onNext={onNext} canContinue={!!selected}>
      <div className="grid gap-3">
        {options.map(o => (
          <button key={o} onClick={() => setSelected(o)}
            className={`text-left p-4 rounded-lg border transition-all ${selected === o ? 'border-primary bg-primary/10 text-foreground' : 'border-border bg-card text-muted-foreground hover:border-primary/50'}`}>
            {o}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}

function StepEnergiegevers({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const options = ["Klantcontact", "Problemen oplossen", "Projecten leiden", "Mensen begeleiden", "Analyseren & structureren", "Iets bouwen", "Creatief werken", "Samenwerken", "Autonoom werken", "Impact zien"];
  const toggle = (o: string) => setSelected(s => s.includes(o) ? s.filter(x => x !== o) : [...s, o]);
  return (
    <StepLayout title="Wat geeft jou energie in werk?" subtitle="Selecteer meerdere opties" onNext={onNext} canContinue={selected.length > 0}>
      <div className="grid grid-cols-2 gap-3">
        {options.map(o => (
          <button key={o} onClick={() => toggle(o)}
            className={`p-3 rounded-lg border text-sm font-medium transition-all flex items-center gap-2 ${selected.includes(o) ? 'border-secondary bg-secondary/10 text-foreground' : 'border-border bg-card text-muted-foreground hover:border-secondary/50'}`}>
            {selected.includes(o) && <Check className="w-4 h-4 text-secondary shrink-0" />}
            {o}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}

function StepEnergievreters({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const options = ["Repetitief werk", "Weinig klantcontact", "Geen zichtbare impact", "Veel interne politiek", "Strakke procedures zonder ruimte", "Weinig verantwoordelijkheid", "Onduidelijke verwachtingen", "Te veel administratie"];
  const toggle = (o: string) => setSelected(s => s.includes(o) ? s.filter(x => x !== o) : [...s, o]);
  return (
    <StepLayout title="Wat kost jou structureel energie?" subtitle="Selecteer wat van toepassing is" onNext={onNext} canContinue={selected.length > 0}>
      <div className="grid grid-cols-2 gap-3">
        {options.map(o => (
          <button key={o} onClick={() => toggle(o)}
            className={`p-3 rounded-lg border text-sm font-medium transition-all ${selected.includes(o) ? 'border-destructive bg-destructive/10 text-foreground' : 'border-border bg-card text-muted-foreground hover:border-destructive/50'}`}>
            {o}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}

function StepWerkstijl({ onNext }: StepProps) {
  const [values, setValues] = useState({ extern: 50, strategisch: 50, team: 50, groot: 50 });
  const sliders = [
    { key: "extern" as const, left: "Intern gericht", right: "Extern gericht" },
    { key: "strategisch" as const, left: "Uitvoerend", right: "Strategisch" },
    { key: "team" as const, left: "Zelfstandig", right: "In team" },
    { key: "groot" as const, left: "Klein bedrijf", right: "Groot bedrijf" },
  ];
  return (
    <StepLayout title="Hoe werk jij het liefst?" onNext={onNext} canContinue>
      <div className="space-y-8">
        {sliders.map(s => (
          <div key={s.key}>
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{s.left}</span><span>{s.right}</span>
            </div>
            <input type="range" min={0} max={100} value={values[s.key]}
              onChange={e => setValues(v => ({ ...v, [s.key]: +e.target.value }))}
              className="w-full accent-primary h-2 rounded-full appearance-none bg-border cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary" />
          </div>
        ))}
      </div>
    </StepLayout>
  );
}

function StepSectoren({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const options = ["Cultuur & musea", "Natuur & duurzaamheid", "Sport & events", "Publieke sector", "Gezondheidszorg", "Innovatie & tech", "Onderwijs", "Impact & maatschappij", "Biotech", "Retail & merken", "Financiën", "Overig"];
  const toggle = (o: string) => setSelected(s => s.includes(o) ? s.filter(x => x !== o) : [...s, o]);
  return (
    <StepLayout title="Welke sectoren of thema's trekken jou aan?" onNext={onNext} canContinue={selected.length > 0}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {options.map(o => (
          <button key={o} onClick={() => toggle(o)}
            className={`p-3 rounded-lg border text-sm font-medium transition-all ${selected.includes(o) ? 'border-primary bg-primary/10 text-foreground' : 'border-border bg-card text-muted-foreground hover:border-primary/50'}`}>
            {o}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}

function StepAntiDoelen({ onNext }: StepProps) {
  const [selected, setSelected] = useState<string[]>(["cold acquisition", "puur administratief"]);
  const suggestions = ["cold acquisition", "puur administratief", "geen klantcontact", "call center", "politieke omgeving", "risicoloze uitvoering", "zonder verbetermandaat"];
  const toggle = (o: string) => setSelected(s => s.includes(o) ? s.filter(x => x !== o) : [...s, o]);
  return (
    <StepLayout title="Wat wil je bewust vermijden?" onNext={onNext} canContinue>
      <div className="flex flex-wrap gap-2">
        {suggestions.map(o => (
          <button key={o} onClick={() => toggle(o)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${selected.includes(o) ? 'bg-destructive/20 text-destructive border border-destructive/30' : 'bg-card border border-border text-muted-foreground hover:border-destructive/50'}`}>
            {o}
          </button>
        ))}
      </div>
    </StepLayout>
  );
}

function StepAmbitie({ onNext }: StepProps) {
  return (
    <StepLayout title="Waar wil je over 3–5 jaar staan?" onNext={onNext} canContinue>
      <div className="space-y-6">
        <textarea placeholder="Beschrijf je ambitie in max 150 tekens..." maxLength={150}
          className="w-full p-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground resize-none h-24 focus:outline-none focus:ring-1 focus:ring-primary" />
        <div>
          <label className="block text-sm text-muted-foreground mb-2">Wat is een realistische tussenstap voor nu?</label>
          <textarea placeholder="Bijv. een rol als projectcoördinator bij een middelgrote organisatie..."
            className="w-full p-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground resize-none h-24 focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
      </div>
    </StepLayout>
  );
}

function StepRandvoorwaarden({ onNext }: StepProps) {
  const [salary, setSalary] = useState(3500);
  return (
    <StepLayout title="Wat zijn jouw randvoorwaarden?" onNext={onNext} canContinue>
      <div className="space-y-6">
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Gewenst salarisniveau: €{salary.toLocaleString()}</label>
          <input type="range" min={2000} max={6000} step={250} value={salary} onChange={e => setSalary(+e.target.value)}
            className="w-full accent-primary h-2 rounded-full appearance-none bg-border cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary" />
          <div className="flex justify-between text-xs text-muted-foreground mt-1"><span>€2.000</span><span>€6.000+</span></div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Locatie</label>
          <input type="text" placeholder="Bijv. Utrecht, Amsterdam, Remote..." className="w-full p-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Beschikbaarheid</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Fulltime", "Parttime", "Freelance", "Open"].map(o => (
              <button key={o} className="p-2 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:border-primary/50 transition-all">{o}</button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">Niveau</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Junior", "Medior", "Senior", "Transitie"].map(o => (
              <button key={o} className="p-2 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:border-primary/50 transition-all">{o}</button>
            ))}
          </div>
        </div>
      </div>
    </StepLayout>
  );
}

function StepCV({ onNext }: StepProps) {
  return (
    <StepLayout title="Upload je huidige cv of plak een samenvatting" onNext={onNext} canContinue buttonLabel="Profiel opslaan">
      <div className="space-y-6">
        <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
          <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-muted-foreground">Sleep je CV hierheen of klik om te uploaden</p>
          <p className="text-xs text-muted-foreground mt-1">PDF of DOCX</p>
        </div>
        <div className="text-center text-sm text-muted-foreground">of</div>
        <textarea placeholder="Plak hier een korte samenvatting van je werkervaring..."
          className="w-full p-4 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground resize-none h-32 focus:outline-none focus:ring-1 focus:ring-primary" />
        <div>
          <label className="text-sm text-muted-foreground mb-2 block">LinkedIn URL (optioneel)</label>
          <input type="url" placeholder="https://linkedin.com/in/..." className="w-full p-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary" />
        </div>
      </div>
    </StepLayout>
  );
}

function StepLayout({ title, subtitle, children, onNext, canContinue, buttonLabel }: {
  title: string; subtitle?: string; children: React.ReactNode; onNext: () => void; canContinue: boolean; buttonLabel?: string;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-heading text-2xl font-bold text-foreground">{title}</h2>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
      {children}
      <button onClick={onNext} disabled={!canContinue}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-opacity disabled:opacity-40">
        {buttonLabel || "Volgende"} <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function OnboardingWizard() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  const next = () => {
    if (step >= TOTAL_STEPS) {
      setDone(true);
      setTimeout(() => navigate("/dashboard"), 2500);
    } else {
      setStep(s => s + 1);
    }
  };
  const back = () => setStep(s => Math.max(1, s - 1));
  const props: StepProps = { onNext: next, onBack: back, step };

  if (done) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <Sparkles className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-2">Profiel opgeslagen</h2>
          <p className="text-muted-foreground">Je Career Blueprint wordt nu gegenereerd...</p>
        </motion.div>
      </div>
    );
  }

  const stepComponents = [StepSituatie, StepEnergiegevers, StepEnergievreters, StepWerkstijl, StepSectoren, StepAntiDoelen, StepAmbitie, StepRandvoorwaarden, StepCV];
  const CurrentStep = stepComponents[step - 1];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border px-6 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="font-heading text-sm font-semibold text-muted-foreground">
            Werk<span className="text-primary">Kompas</span> AI
          </span>
          <span className="text-sm text-muted-foreground">Stap {step} van {TOTAL_STEPS}</span>
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 pt-4">
        <div className="max-w-2xl mx-auto">
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <motion.div className="h-full bg-primary rounded-full" animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }} transition={{ duration: 0.3 }} />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-6 py-10">
        <div className="w-full max-w-2xl">
          {step > 1 && (
            <button onClick={back} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Vorige
            </button>
          )}
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
              <CurrentStep {...props} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
