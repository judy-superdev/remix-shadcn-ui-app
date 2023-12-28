import { FC } from "react";
import DashboardHeader from "./DashboardHeader";

const DashboardPage: FC = () => {
  return (
    <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow-md md:shadow-xl">
      <div className="hidden flex-col md:flex">
        <DashboardHeader />
      </div>
    </div>
  );
};

export default DashboardPage;
