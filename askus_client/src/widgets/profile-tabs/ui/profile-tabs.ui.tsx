import React from "react";

export const ProfileTabs: React.FC = () => {
    return (
        <div className="bg-white rounded-md p-1 flex items-center my-3">
            <div className="flex items-center gap-3 py-1 px-3 rounded-md bg-[#f1f1f1]">
                <span>❓</span>
                <p className="text-sm opacity-80">My Posts</p>
            </div>
            <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                <span>‼️</span>
                <p className="text-sm opacity-80">My answers</p>
            </div>
            <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                <span>🎖</span>
                <p className="text-sm opacity-80">Ranks</p>
            </div>
        </div>
    );
};
