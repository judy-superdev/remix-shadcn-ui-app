import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import SettingsProfilePage from "../components/forms/page";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Forms" },
    { name: "description", content: "Advanced form example using react-hook-form and Zod." },
  ];
};

const Forms: FC = () => {
  return (
    <SettingsProfilePage />
  );
};

export default Forms;
