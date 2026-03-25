import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard, Sparkles, Target, Building2, Search, FileText, PenTool,
  MessageSquare, TrendingUp, ListChecks, Settings, Menu, X, Compass
} from "lucide-react";
import { useUser } from "@/context/UserContext";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/blueprint", icon: Sparkles, label: "Career Blueprint" },
  { to: "/rolrichtingen", icon: Target, label: "Rolrichtingen" },
  { to: "/bedrijfstypen", icon: Building2, label: "Bedrijfstypen" },
  { to: "/vacature-analyzer", icon: Search, label: "Vacature Fit" },
  { to: "/cv-studio", icon: FileText, label: "CV Studio" },
  { to: "/motivatiebrief", icon: PenTool, label: "Motivatiebrief" },
  { to: "/interview-coach", icon: MessageSquare, label: "Interview Coach" },
  { to: "/groeiplan", icon: TrendingUp, label: "Groeiplan" },
  { to: "/actiecentrum", icon: ListChecks, label: "Actiecentrum" },
  { to: "/instellingen", icon: Settings, label: "Instellingen" },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { profiel, voornaam } = useUser();

  const voortgangItems = [
    { label: "Basisgegevens", done: !!profiel.naam },
    { label: "Energieprofiel", done: profiel.energiegevers.length > 0 },
    { label: "Sectorvoorkeuren", done: profiel.sectoren.length > 0 },
    { label: "CV upload", done: !!profiel.cvSamenvatting },
    { label: "Ambitie", done: !!profiel.ambitie },
  ];
  const profielCompletion = Math.round(
    (voortgangItems.filter((i) => i.done).length / voortgangItems.length) * 100
  );

  const initiaal = profiel.naam ? profiel.naam.charAt(0).toUpperCase() : "?";

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 border-r border-border bg-sidebar fixed inset-y-0 left-0 z-40">
        <div className="p-5 border-b border-sidebar-border">
          <NavLink to="/dashboard" className="font-heading text-lg font-bold text-foreground tracking-tight">
            <Compass className="w-5 h-5 inline-block text-primary mr-1.5 -mt-0.5" />
            Werk<span className="text-primary">Kompas</span>
          </NavLink>
        </div>
        <nav className="flex-1 py-3 px-3 space-y-0.5 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent"
                }`
              }>
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
              {initiaal}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{voornaam}</p>
              <p className="text-xs text-muted-foreground">{profiel.locatie || "Locatie onbekend"}</p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Profiel compleet</span>
              <span>{profielCompletion}%</span>
            </div>
            <div className="h-1.5 bg-sidebar-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${profielCompletion}%` }}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur px-4 h-14 flex items-center justify-between">
        <NavLink to="/dashboard" className="font-heading text-base font-bold text-foreground">
          Werk<span className="text-primary">Kompas</span>
        </NavLink>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg hover:bg-accent">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background pt-14">
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-accent"
                  }`
                }>
                <item.icon className="w-4 h-4 shrink-0" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-64 min-h-screen">
        <div className="p-6 pt-20 lg:pt-6 max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
