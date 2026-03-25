import { motion, type Variants } from "framer-motion";
import { ArrowRight, Search, FileText, ListChecks, Sparkles, Target, PenTool, MessageSquare, CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }
  })
};

const stuckReasons = [
  "Je weet wat je níét meer wilt, maar niet wat wél",
  "Je scrollt door vacatures zonder te weten waar je op moet letten",
  "Je cv voelt generiek, maar je weet niet hoe je het scherper maakt",
  "Je twijfelt of je 'genoeg' ervaring hebt voor die ene rol",
];

const steps = [
  { icon: Sparkles, title: "Ontdek wat past", desc: "Breng in kaart wat jou energie geeft, wat je sterk maakt, en welke richtingen realistisch bij je passen." },
  { icon: Search, title: "Zoek gerichter", desc: "Beoordeel vacatures op fit met jouw profiel. Geen gokwerk, maar een onderbouwde analyse." },
  { icon: FileText, title: "Solliciteer sterker", desc: "Genereer een cv, motivatiebrief en interviewvoorbereiding die aansluiten op de specifieke vacature." },
];

const features = [
  { icon: Target, title: "Loopbaanverkenning", desc: "Ontdek welke rollen, sectoren en bedrijfstypen bij jouw profiel en voorkeuren passen." },
  { icon: Search, title: "Vacature Fit", desc: "Plak een vacature en zie direct hoe goed deze bij je past — met scores op vijf dimensies." },
  { icon: FileText, title: "CV op maat", desc: "Pas je cv automatisch aan op de vacature. Scherper geformuleerd, beter gericht." },
  { icon: PenTool, title: "Motivatiebrief", desc: "Geen standaardbrief. Een persoonlijk verhaal in drie delen: waarom jij, waarom zij, waarom nu." },
  { icon: MessageSquare, title: "Interviewvoorbereiding", desc: "Verwachte vragen, STAR-voorbeelden en slimme tegenvragen — specifiek voor de rol." },
  { icon: ListChecks, title: "Actie-overzicht", desc: "Houd grip op je sollicitaties, follow-ups en deadlines in één werkruimte." },
];

const targetAudience = [
  "Je werkt 1–5 jaar en zoekt een volgende stap",
  "Je twijfelt tussen meerdere richtingen of sectoren",
  "Je wilt gerichter zoeken in plaats van eindeloos scrollen",
  "Je wilt sterker solliciteren met documenten die echt op jou zijn afgestemd",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg font-bold text-foreground tracking-tight">
            Werk<span className="text-primary">Kompas</span>
          </Link>
          <Link
            to="/onboarding"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Start gratis
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Weet je niet precies{" "}
              <br className="hidden sm:block" />
              wat je volgende stap is?
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              WerkKompas helpt je ontdekken welk werk bij je past, gerichter zoeken naar passende vacatures, en sterker solliciteren — in één persoonlijke werkruimte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity"
              >
                Ontdek jouw richting
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-border text-foreground font-medium text-base hover:bg-accent transition-colors"
              >
                Bekijk een voorbeeld
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why people get stuck */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Herkenbaar?
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-10 max-w-lg mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            De meeste jonge professionals lopen hier tegenaan
          </motion.p>
          <div className="space-y-4">
            {stuckReasons.map((reason, i) => (
              <motion.div
                key={reason}
                className="gradient-border-card p-5 flex items-start gap-4"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 2}
              >
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p className="text-foreground text-sm sm:text-base">{reason}</p>
              </motion.div>
            ))}
          </div>
          <motion.p
            className="text-center text-muted-foreground mt-10 max-w-lg mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={6}
          >
            Het probleem is niet dat je niet goed genoeg bent. Het probleem is dat je zonder richting zoekt.
          </motion.p>
        </div>
      </section>

      {/* How it works — 3 steps */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Zo werkt WerkKompas
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-14 max-w-lg mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            Van twijfel naar een gerichte volgende stap — in drie fasen
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="gradient-border-card p-6"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 2}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-sm text-primary font-medium mb-1">Stap {i + 1}</div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What this is NOT + what it IS */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Niet nóg een tool. Een werkwijze.
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="gradient-border-card p-6"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
            >
              <h3 className="font-heading text-base font-semibold text-destructive mb-4">Wat WerkKompas niet is</h3>
              <ul className="space-y-3">
                {["Een vacaturebank met duizenden listings", "Een standaard cv-builder met templates", "Een motivatie-app met quotes en tips", "Een AI-chatbot die je vertelt wat je moet doen"].map(t => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <XCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className="gradient-border-card p-6"
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={2}
            >
              <h3 className="font-heading text-base font-semibold text-secondary mb-4">Wat WerkKompas wél is</h3>
              <ul className="space-y-3">
                {["Een persoonlijke werkruimte die jouw profiel onthoudt", "AI-ondersteuning die je helpt scherper te kiezen", "Documenten die specifiek op jou en de vacature zijn afgestemd", "Eén plek voor richting, sollicitatie en opvolging"].map(t => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Alles wat je nodig hebt voor je volgende stap
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-14 max-w-lg mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            Zes tools die samenwerken rondom jouw profiel
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="gradient-border-card p-6 hover:bg-accent/50 transition-colors"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-base font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Voor wie is WerkKompas?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-10"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            WerkKompas is gebouwd voor jonge professionals die klaar zijn voor een volgende stap, maar niet precies weten welke.
          </motion.p>
          <div className="space-y-3 text-left max-w-xl mx-auto">
            {targetAudience.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                variants={fadeUp} custom={i + 2}
              >
                <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <p className="text-sm text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Klaar om richting te kiezen?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            Start gratis met je loopbaanverkenning. Geen account nodig, geen verplichtingen.
          </motion.p>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
          >
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Ontdek jouw richting
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-sm font-semibold text-muted-foreground">
            Werk<span className="text-primary">Kompas</span>
          </span>
          <p className="text-xs text-muted-foreground">© 2026 WerkKompas. Van twijfel naar een gerichte volgende stap.</p>
        </div>
      </footer>
    </div>
  );
}
