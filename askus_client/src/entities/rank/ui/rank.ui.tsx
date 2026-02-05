import React from "react";

interface IRankProps {
    badge_url: string;
    name?: string;
    size?: "sm" | "md" | "lg";
    showName?: boolean;
}

const styles = {
    sm: {
        text: "text-sm",
        image: "max-w-4",
    },
    md: {
        text: "text-[16px]",
        image: "max-w-6",
    },
    lg: {
        text: "text-lg",
        image: "max-w-8",
    },
};

export const Rank: React.FC<IRankProps> = ({ badge_url, name, size = "md", showName = true }) => {
    return (
        <div className="flex items-center gap-2">
            <div className={styles[size].image}>
                <img src={badge_url} className="w-full" alt="" />
            </div>
            {showName && <p className={`capitalize ${styles[size].text}`}>{name}</p>}
        </div>
    );
};
