import React from "react";
import icon from "@/shared/assets/images/text-icon.png";

export const Tag: React.FC = () => {
    return (
        <div className="flex items-center gap-3 mb-3">
            <div>
                <img src={icon} alt="" />
            </div>
            <p>Programming</p>
        </div>
    );
};
