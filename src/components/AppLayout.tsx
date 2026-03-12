import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard, Sparkles, Target, Building2, Search, FileText, PenTool,
  MessageSquare, TrendingUp, ListChecks, Settings, Menu, X, Compass
} from "lucide-react";

const navItems = [
  { to: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { to: "/blueprint", icon: Sparkles, label: "Career Blueprint" },
  { to: "/rolrichtingen", icon: Target, label: "Rolrichtingen" },
  { to: "/bedrijfstypen", icon: Building2, label: "Bedrijfstypen" },
  { to: "/vacature-analyzer", icon: Search, label: "Vacature Analyzer" },
  { to: "/cv-studio", icon: FileText, label: "CV Studio" },
  { to: "/motivatiebrief", icon: PenTool, label: "Motivatiebrief" },
  { to: "/interview-coach", icon: MessageSquare, label: "Interview Coach" },
  { to: "/groeiplan", icon: TrendingUp, label: "Groeiplan" },
  { to: "/actiecentrum", icon: ListChecks, label: "Actiecentrum" },
  { to: "/instellingen", icon: Settings, label: "Instellingen" },
];

const profileCompletion = 78;

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

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
          {navItems.map(item => (
            <NavLink key={item.to} to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-sidebar-foreground hover:text-foreground hover:bg-sidebar-accent'}`
              }>
              <item.icon className="w-4 h-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 border-t border-sidebar-border">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">S</div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">Sanne</p>
              <p className="text-xs text-muted-foreground">Utrecht</p>
            </div>
          </div>
          <div className="mt-2">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Profiel compleet</span>
              <span>{profileCompletion}%</span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <div className="h-full bg-secondary rounded-full" style={{ width: `${profileCompletion}%` }} />
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border h-14 flex items-center px-4 justify-between">
        <span className="font-heading text-base font-bold text-foreground">
          <Compass className="w-4 h-4 inline-block text-primary mr-1 -mt-0.5" />Werk<span className="text-primary">Kompas</span>
        </span>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-1">
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-14">
          <nav className="p-4 space-y-1">
            {navItems.map(item => (
              <NavLink key={item.to} to={item.to} onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'}`
                }>
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 lg:ml-64 pt-14 lg:pt-0">
        <div className="p-6 lg:p-8 max-w-6xl mx-auto">
          {children}
        </div>
      </main>

      {/* Mobile bottom nav */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background/90 backdrop-blur-xl border-t border-border z-40">
        <div className="flex justify-around py-2">
          {navItems.slice(0, 5).map(item => (
            <NavLink key={item.to} to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 px-2 py-1 text-xs ${isActive ? 'text-primary' : 'text-muted-foreground'}`
              }>
              <item.icon className="w-5 h-5" />
              <span className="truncate max-w-[56px]">{item.label.split(" ")[0]}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}
