import React from "react";

export const Tag: React.FC<{ badge_url: string; tag: string }> = ({ badge_url, tag }) => {
    return (
        <div className="flex items-center gap-3 mb-3 cursor-pointer">
            <div className="max-w-7">
                <img src={badge_url} alt="" />
            </div>
            <p className="capitalize">{tag}</p>
        </div>
    );
};
