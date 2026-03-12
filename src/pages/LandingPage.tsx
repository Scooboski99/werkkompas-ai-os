import { motion } from "framer-motion";
import { ArrowRight, Compass, Search, FileText, ListChecks, Sparkles, Target, PenTool, MessageSquare, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" }
  })
};

const steps = [
  { icon: Compass, title: "Breng in kaart", desc: "wie je bent en wat jou energie geeft" },
  { icon: Target, title: "Ontdek", desc: "welke rollen, sectoren en bedrijven bij jou passen" },
  { icon: Search, title: "Analyseer", desc: "vacatures en maak sterke sollicitaties" },
  { icon: ListChecks, title: "Houd grip", desc: "op je acties en opvolging" },
];

const features = [
  { icon: Sparkles, title: "Career Blueprint", desc: "Diep inzicht in wie je bent en wat bij je past" },
  { icon: BarChart3, title: "Vacature-fit analyse", desc: "Elke vacature objectief beoordeeld op jouw profiel" },
  { icon: FileText, title: "CV op maat", desc: "Automatisch afgestemd op de vacature" },
  { icon: PenTool, title: "Motivatiebrief", desc: "Uniek drieluik-format dat opvalt" },
  { icon: MessageSquare, title: "Interview Coach", desc: "Voorbereiding met verwachte vragen en STAR-verhalen" },
  { icon: ListChecks, title: "Actie-workflow", desc: "Alles in één overzicht: sollicitaties, follow-ups, deadlines" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-lg font-bold text-foreground tracking-tight">
            Werk<span className="text-primary">Kompas</span> AI
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
            <div className="ai-badge mx-auto mb-6 w-fit">
              <Sparkles className="w-3 h-3" />
              Persoonlijk loopbaan-systeem
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Weet jij wat je zoekt{" "}
              <br className="hidden sm:block" />
              in je werk?{" "}
              <span className="text-primary">Wij helpen je erachter komen.</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              WerkKompas AI combineert zelfinzicht, vacature-analyse, en slimme sollicitatietools in één persoonlijk loopbaan-systeem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/onboarding"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-base hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                Start de verkenning
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

      {/* How it works */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-4"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Hoe het werkt
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-center mb-14 max-w-lg mx-auto"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            Vier stappen van twijfel naar gerichte actie
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What this is NOT */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground mb-6"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Wat dit <span className="text-destructive">niet</span> is
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            {["Geen vacaturesite", "Geen standaard cv-builder", "Geen motivatie-app"].map(t => (
              <span key={t} className="px-4 py-2 rounded-full border border-destructive/30 text-destructive text-sm font-medium">
                {t}
              </span>
            ))}
          </motion.div>
          <motion.p
            className="text-muted-foreground leading-relaxed"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
          >
            WerkKompas AI bouwt een persoonlijke loopbaanlogica op basis van wie jij bent. Geen generieke tips, maar concrete richtingen, onderbouwde keuzes, en een workflow die je bij de les houdt. Van zelfinzicht naar actie.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-heading text-3xl font-bold text-foreground text-center mb-14"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={0}
          >
            Wat je krijgt
          </motion.h2>
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
                <p className="text-sm text-muted-foreground">{f.desc}</p>
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
            Begin vandaag. Gratis.
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-8"
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={1}
          >
            Maak je profiel aan en ontvang je persoonlijke Career Blueprint.
          </motion.p>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp} custom={2}
          >
            <Link
              to="/onboarding"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Start de verkenning
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-heading text-sm font-semibold text-muted-foreground">
            Werk<span className="text-primary">Kompas</span> AI
          </span>
          <p className="text-xs text-muted-foreground">© 2026 WerkKompas AI. Van twijfel naar gerichte loopbaanactie.</p>
        </div>
      </footer>
    </div>
  );
}
