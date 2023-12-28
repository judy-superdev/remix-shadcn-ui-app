import { type MetaFunction } from "@remix-run/node";
import { FC } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";

// SEO
export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Dashboard page of this example" },
  ];
};

const Dashboard: FC = () => {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
        <DashboardHeader/>
    </div>
  );
};

export default Dashboard;
