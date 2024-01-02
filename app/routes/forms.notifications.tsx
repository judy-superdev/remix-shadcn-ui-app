import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import SettingsNotificationsPage from "../components/forms/notifications/page";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Forms Notifications" },
    { name: "description", content: "Advanced form example using react-hook-form and Zod." },
  ];
};

const Forms: FC = () => {
  return (
    <SettingsNotificationsPage/>
  );
};

export default Forms;
