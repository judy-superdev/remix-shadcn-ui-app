import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import SettingsAccountPage from "../components/forms/account/page";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Forms" },
    { name: "description", content: "Advanced form example using react-hook-form and Zod." },
  ];
};

const Forms: FC = () => {
  return (
    <SettingsAccountPage/>
  );
};

export default Forms;
