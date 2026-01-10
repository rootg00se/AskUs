import React from "react";

export const PostTabs: React.FC = () => {
    return (
        <div className="bg-white rounded-md p-1 flex items-center">
            <div className="flex items-center gap-3 py-1 px-3 rounded-md bg-[#f1f1f1]">
                <span>🌱</span>
                <p className="text-sm opacity-80">New</p>
            </div>
            <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                <span>🔥</span>
                <p className="text-sm opacity-80">Popular</p>
            </div>
            <div className="flex items-center gap-3 py-1 px-3 rounded-md">
                <span>❌</span>
                <p className="text-sm opacity-80">Recently closed</p>
            </div>
        </div>
    );
};
