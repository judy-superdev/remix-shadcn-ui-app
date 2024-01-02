import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { FC, useState, useEffect } from "react";
import DashboardPage from "../components/dashboard/DashboardPage";
import { useLoaderData } from "@remix-run/react";
import { DashboardContextProvider } from "~/store/dashboard-context";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  return json({ q });
};

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Dashboard page of this example" },
  ];
};

const Dashboard: FC = () => {
  return (
    <DashboardContextProvider>
      <DashboardPage />
    </DashboardContextProvider>
  );
};

export default Dashboard;
