import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import SettingsLayout from "../components/forms/layout";
import { Outlet } from "@remix-run/react";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Forms" },
    { name: "description", content: "Advanced form example using react-hook-form and Zod." },
  ];
};

const Forms: FC = () => {
  return (
    <SettingsLayout>
      <Outlet />
    </SettingsLayout>
  );
};

export default Forms;
