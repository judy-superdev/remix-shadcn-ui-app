import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import SettingsDisplayPage from "../components/forms/display/page";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Forms Display" },
    { name: "description", content: "Advanced form example using react-hook-form and Zod." },
  ];
};

const Forms: FC = () => {
  return (
    <SettingsDisplayPage/>
  );
};

export default Forms;
