import React from "react";
import icon from "@/shared/assets/images/text-icon.png";

export const Rank: React.FC = () => {
    return (
        <div className="flex items-center gap-2">
            <div className="max-w-6">
                <img src={icon} className="w-full" alt="" />
            </div>
            <p className="">Better call me</p>
        </div>
    );
};
