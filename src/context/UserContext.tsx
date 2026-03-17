import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserProfile {
  naam: string;
  situatie: string;
  energiegevers: string[];
  energievreters: string[];
  werkstijl: {
    extern: number;
    strategisch: number;
    team: number;
    groot: number;
  };
  sectoren: string[];
  antiDoelen: string[];
  ambitie: string;
  tussenstap: string;
  salaris: number;
  locatie: string;
  beschikbaarheid: string;
  niveau: string;
  cvSamenvatting: string;
  linkedinUrl: string;
  profielCompleet: number;
  isCompleted: boolean;
}

const defaultProfile: UserProfile = {
  naam: "",
  situatie: "",
  energiegevers: [],
  energievreters: [],
  werkstijl: { extern: 50, strategisch: 50, team: 50, groot: 50 },
  sectoren: [],
  antiDoelen: [],
  ambitie: "",
  tussenstap: "",
  salaris: 3500,
  locatie: "",
  beschikbaarheid: "",
  niveau: "",
  cvSamenvatting: "",
  linkedinUrl: "",
  profielCompleet: 0,
  isCompleted: false,
};

function berekenVoortgang(p: UserProfile): number {
  const checks = [
    !!p.naam,
    !!p.situatie,
    p.energiegevers.length > 0,
    p.energievreters.length > 0,
    p.sectoren.length > 0,
    !!p.locatie,
    !!p.beschikbaarheid,
    !!p.niveau,
    !!p.cvSamenvatting || !!p.linkedinUrl,
    !!p.ambitie,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

interface UserContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  resetProfile: () => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile>(() => {
    try {
      const saved = localStorage.getItem("werkkompas_profile");
      if (saved) return { ...defaultProfile, ...JSON.parse(saved) };
    } catch {}
    return defaultProfile;
  });

  useEffect(() => {
    localStorage.setItem("werkkompas_profile", JSON.stringify(profile));
  }, [profile]);

  function updateProfile(updates: Partial<UserProfile>) {
    setProfile(prev => {
      const next = { ...prev, ...updates };
      return { ...next, profielCompleet: berekenVoortgang(next) };
    });
  }

  function resetProfile() {
    setProfile(defaultProfile);
    localStorage.removeItem("werkkompas_profile");
  }

  return (
    <UserContext.Provider value={{ profile, updateProfile, resetProfile }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
}
