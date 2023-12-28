import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import DashboardPage from "../components/dashboard/DashboardPage";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Dashboard page of this example" },
  ];
};

const Dashboard: FC = () => {
  return (
    <DashboardPage />
  );
};

export default Dashboard;
