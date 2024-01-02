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


export const loader = async () => {
  const teams = await getTeams();
  return json({ teams });
};
const Dashboard: FC = () => {
  const { teams } = useLoaderData<typeof loader>();
  console.log({teams})
  return (
    <DashboardPage />
  );
};

export default Dashboard;
