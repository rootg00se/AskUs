import React from "react";
import { SidebarNav } from "./sidebar-nav.ui";
import { SidebarFooter } from "./sidebar-footer.ui";
import { SidebarTags } from "./sidebar-tags.ui";
import { SidebarDifficulties } from "./sidebar-difficulties";

export const Sidebar: React.FC = () => {
    return (
        <aside className="w-full max-w-60 h-full sticky top-22 self-start">
            <SidebarNav />
            <div className="w-full h-px bg-[#c0c0c0]"></div>
            <SidebarTags />
            <div className="w-full h-px bg-[#c0c0c0]"></div>
            <SidebarDifficulties />
            <SidebarFooter />
        </aside>
    );
};