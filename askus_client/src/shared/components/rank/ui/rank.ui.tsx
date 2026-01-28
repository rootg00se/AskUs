import React from "react";

interface IRankProps {
    badge_url: string;
    name: string;
}

export const Rank: React.FC<IRankProps> = ({ badge_url, name }) => {
    return (
        <div className="flex items-center gap-2">
            <div className="max-w-6">
                <img src={badge_url} className="w-full" alt="" />
            </div>
            <p className="capitalize">{name}</p>
        </div>
    );
};
