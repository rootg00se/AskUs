import { ArrowRight } from "lucide-react";
import React from "react";
import { SidebarNav } from "./sidebar-nav.ui";
import { Tag } from "@/shared/components/tag";
import { SidebarFooter } from "./sidebar-footer.ui";
import { Difficulty } from "@/shared/components/difficulty";

export const Sidebar: React.FC = () => {
    return (
        <aside className="w-full max-w-60 h-full sticky top-22 self-start">
            <SidebarNav />
            <div className="w-full h-px bg-[#c0c0c0]"></div>
            <div className="pt-3 pb-4">
                <p className="mb-4 opacity-55">Posts categories:</p>
                <div className="mb-8">
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
                <div className="flex items-center justify-between">
                    <p className="opacity-55">See more:</p>
                    <ArrowRight size={16} className="opacity-55" />
                </div>
            </div>
            <div className="w-full h-px bg-[#c0c0c0]"></div>
            <div className="py-3">
                <p className="mb-4 opacity-55">Posts difficulties:</p>
                <div className="mb-8">
                    <Difficulty className="mb-3" />
                    <Difficulty className="mb-3" />
                    <Difficulty className="mb-3" />
                    <Difficulty />
                </div>
            </div>
            <SidebarFooter />
        </aside>
    );
};
