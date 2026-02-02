import React from "react";

interface IRankProps {
    badge_url: string;
    name: string;
    size?: "sm" | "md"
}

export const Rank: React.FC<IRankProps> = ({ badge_url, name, size = "md" }) => {
    return (
        <div className="flex items-center gap-2">
            <div className={size === "sm" ? "max-w-4" : "max-w-6"}>
                <img src={badge_url} className="w-full" alt="" />
            </div>
            <p className={`capitalize ${size === "sm" && "text-[14px]"}`}>{name}</p>
        </div>
    );
};
