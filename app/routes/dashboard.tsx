import { json, type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import DashboardPage from "../components/dashboard/DashboardPage";
import { getTeams } from "../components/dashboard/data";
import { useLoaderData } from "@remix-run/react";

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
