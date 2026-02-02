import { cn } from "@/shared/lib/utils";
import React from "react";

interface IRankInfoProps {
    badge_url: string;
    name: string;
    required_points: number;
    className?: string
}

export const RankInfo: React.FC<IRankInfoProps> = ({ badge_url, name, required_points, className }) => {
    return (
        <div className={cn("flex-1/5 text-center", className)}>
            <div className="max-w-13 mb-3 mx-auto">
                <img src={badge_url} alt="" />
            </div>
            <p className="capitalize leading-4">{name}</p>
            <p className="text-sm opacity-50">Reuiered point: {required_points}</p>
        </div>
    );
};
