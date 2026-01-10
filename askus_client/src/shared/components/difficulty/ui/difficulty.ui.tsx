import React from "react";
import icon from "@/shared/assets/images/test-icon-4.png";
import { cn } from "@/shared/lib/utils";

export const Difficulty: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <div>
                <img src={icon} alt="" />
            </div>
            <p>Easy</p>
        </div>
    );
};
