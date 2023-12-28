import { FC } from "react";
import TeamSelector from "./TeamSelector";

const DashboardHeader : FC = () => {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <TeamSelector />
            </div>
        </div>
    )
}

export default DashboardHeader