import React from "react";
import { cn } from "@/shared/lib/utils";

interface IDifficultyProps {
    className?: string;
    badge_url: string;
    difficulty: string;
}

export const Difficulty: React.FC<IDifficultyProps> = ({ className, difficulty, badge_url }) => {
    return (
        <div className={cn("flex items-center gap-3 cursor-pointer", className)}>
            <div className="max-w-7">
                <img src={badge_url} alt="" />
            </div>
            <p className="capitalize">{difficulty}</p>
        </div>
    );
};
