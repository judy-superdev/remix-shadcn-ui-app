import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import SettingsAppearancePage from "../components/forms/appearance/page";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Forms Appearance" },
    { name: "description", content: "Advanced form example using react-hook-form and Zod." },
  ];
};

const Forms: FC = () => {
  return (
    <SettingsAppearancePage/>
  );
};

export default Forms;
