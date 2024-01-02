import { useLoaderData } from "@remix-run/react";
import { createContext, useState, useEffect, ReactNode } from "react";
import { loader } from "../routes/dashboard";

interface DashboardContextProviderProps {
  children: ReactNode;
}

const groups = [
  {
    label: "Personal Account",
    teams: [
      {
        label: "Alicia Koch",
        value: "personal",
      },
    ],
  },
  {
    label: "Teams",
    teams: [
      {
        label: "Acme Inc.",
        value: "acme-inc",
      },
      {
        label: "Monsters Inc.",
        value: "monsters",
      },
    ],
  },
];

export type Team = (typeof groups)[number]["teams"][number];
export interface DashboardContextConfig {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  q: string | null;
  groups: { label: string; teams: Team[] }[];
  addToTeams: Function;
}

export const DashboardContext = createContext<DashboardContextConfig>({
  term: "",
  setTerm: () => {},
  q: null,
  groups,
  addToTeams: () => {},
});

export const handleAddtoTeams = (payload: { name: string; plan: string }): void => {
  groups[1].teams.push({
    label: payload.name,
    value: payload.name,
  });

  console.log(groups[1].teams)
};

export const DashboardContextProvider = ({
  children,
}: DashboardContextProviderProps) => {
  const { q } = useLoaderData<typeof loader>();
  const [term, setTerm] = useState(q || "");

  useEffect(() => {
    setTerm(q || "");
  }, [q]);

 

  const ctxValue = {
    term,
    setTerm,
    q,
    groups,
    addToTeams: handleAddtoTeams,
  };

  return (
    <DashboardContext.Provider value={ctxValue}>
      {children}
    </DashboardContext.Provider>
  );
};
