import { ArrowRight } from "lucide-react";
import React from "react";
import { SidebarNav } from "./sidebar-nav.ui";
import { Tag } from "@/shared/components/tag";
import { SidebarFooter } from "./sidebar-footer.ui";
import { Difficulty } from "@/shared/components/difficulty";
import { useTags } from "@/entities/tag";
import { useDifficulties } from "@/entities/difficulty";

export const Sidebar: React.FC = () => {
    const { tagsData } = useTags();
    const { difficultiesData } = useDifficulties();

    return (
        <aside className="w-full max-w-60 h-full sticky top-22 self-start">
            <SidebarNav />
            <div className="w-full h-px bg-[#c0c0c0]"></div>
            <div className="pt-3 pb-4">
                    <p className="mb-4 opacity-55">Posts categories:</p>
                    <div className="mb-8">
                        {tagsData?.slice(0, 6).map((el) => (
                            <Tag badge_url={el.badge_url} tag={el.tag} key={el.tag_id} />
                        ))}
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
                        {difficultiesData?.map((el) => (
                            <Difficulty
                                difficulty={el.difficulty}
                                badge_url={el.badge_url}
                                key={el.post_difficulty_id}
                                className="mb-3"
                            />
                        ))}
                    </div>
            </div>
            <SidebarFooter />
        </aside>
    );
};
