import { Album, Home, Lightbulb } from "lucide-react";
import React from "react";

export const SidebarNav: React.FC = () => {
    return (
        <div className="pb-4">
            <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md bg-white cursor-pointer">
                <Home size={20} color="#ec003f" />
                <p className="">Home</p>
            </div>
            <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer">
                <Album size={20} />
                <p className="">My posts</p>
            </div>
            <div className="flex items-center gap-3 py-2 px-3 w-full rounded-md cursor-pointer">
                <Lightbulb size={20} />
                <p className="">My answers</p>
            </div>
        </div>
    );
};
