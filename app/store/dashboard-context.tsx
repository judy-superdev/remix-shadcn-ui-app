import { useLoaderData } from "@remix-run/react";
import { createContext, useState, useEffect, ReactNode } from "react";
import { loader } from "../routes/dashboard";

export interface DashboardContextConfig {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
  q: string | null
}

interface DashboardContextProviderProps {
  children: ReactNode;
}

export const DashboardContext = createContext<DashboardContextConfig>({
  term: "",
  setTerm: () => {},
  q: null,
});

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
    q
  };

  return (
    <DashboardContext.Provider value={ctxValue}>
      {children}
    </DashboardContext.Provider>
  );
};
