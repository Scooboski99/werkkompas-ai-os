import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { UserProvider } from "@/context/UserContext";
import LandingPage from "./pages/LandingPage";
import OnboardingWizard from "./pages/OnboardingWizard";
import DashboardPage from "./pages/DashboardPage";
import CareerBlueprintPage from "./pages/CareerBlueprintPage";
import RolrichtingenPage from "./pages/RolrichtingenPage";
import BedrijfstypenPage from "./pages/BedrijfstypenPage";
import VacatureAnalyzerPage from "./pages/VacatureAnalyzerPage";
import CVStudioPage from "./pages/CVStudioPage";
import MotivatiebriefPage from "./pages/MotivatiebriefPage";
import InterviewCoachPage from "./pages/InterviewCoachPage";
import GroeiplanPage from "./pages/GroeiplanPage";
import ActiecentrumPage from "./pages/ActiecentrumPage";
import InstellingenPage from "./pages/InstellingenPage";
import AppLayout from "./components/AppLayout";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppPage({ children }: { children: React.ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/onboarding" element={<OnboardingWizard />} />
            <Route path="/dashboard" element={<AppPage><DashboardPage /></AppPage>} />
            <Route path="/blueprint" element={<AppPage><CareerBlueprintPage /></AppPage>} />
            <Route path="/rolrichtingen" element={<AppPage><RolrichtingenPage /></AppPage>} />
            <Route path="/bedrijfstypen" element={<AppPage><BedrijfstypenPage /></AppPage>} />
            <Route path="/vacature-analyzer" element={<AppPage><VacatureAnalyzerPage /></AppPage>} />
            <Route path="/cv-studio" element={<AppPage><CVStudioPage /></AppPage>} />
            <Route path="/motivatiebrief" element={<AppPage><MotivatiebriefPage /></AppPage>} />
            <Route path="/interview-coach" element={<AppPage><InterviewCoachPage /></AppPage>} />
            <Route path="/groeiplan" element={<AppPage><GroeiplanPage /></AppPage>} />
            <Route path="/actiecentrum" element={<AppPage><ActiecentrumPage /></AppPage>} />
            <Route path="/instellingen" element={<AppPage><InstellingenPage /></AppPage>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </UserProvider>
  </QueryClientProvider>
);

export default App;
