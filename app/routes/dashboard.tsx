import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
  redirect,
} from "@remix-run/node";
import { FC, useState, useEffect } from "react";
import DashboardPage from "../components/dashboard/DashboardPage";
import { DashboardContextProvider } from "~/store/dashboard-context";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  return json({ q });
};

export const action = async ({ params, request }: ActionFunctionArgs) => {
  
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  console.log('Submitted Data',updates)

  return json({updates})
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
