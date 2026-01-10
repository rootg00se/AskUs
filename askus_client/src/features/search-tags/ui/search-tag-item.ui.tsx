import { X } from "lucide-react";
import React from "react";

export const SearchTagItem: React.FC = () => {
    return (
        <div className="inline-flex items-center gap-2 bg-white rounded-md p-1">
            <X size={15} className="opacity-70" />
            <span className="text-sm opacity-70">#programming</span>
        </div>
    );
};
