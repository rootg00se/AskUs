import { Mail, Phone } from "lucide-react";
import React from "react";

export const SidebarFooter: React.FC = () => {
    return (
        <div className="mt-[40%] flex items-center gap-4">
            <p className="opacity-70">Contact us: </p>
            <div className="flex items-center gap-3">
                <Mail size={20} className="opacity-80" />
                <Phone size={20} className="opacity-80" />
            </div>
        </div>
    );
};
