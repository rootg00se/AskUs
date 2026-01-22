import { Github, Mail, Phone } from "lucide-react";
import React from "react";

export const SidebarFooter: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            <p className="opacity-70">Contact us: </p>
            <div className="flex items-center gap-3">
                <a href="mailto:gorc141408@gmail.com">
                    <Mail size={20} className="opacity-80" />
                </a>
                <a href="https://github.com/rootg00se">
                    <Github size={20} className="opacity-80" />
                </a>
                <a href="https://t.me/rootg00se">
                    <Phone size={20} className="opacity-80" />
                </a>
            </div>
        </div>
    );
};
