import { useTags } from "@/entities/tag";
import { TagFilter } from "@/features/tag-filter";
import { ArrowDown, ArrowUp } from "lucide-react";
import React, { useState } from "react";

export const SidebarTags: React.FC = () => {
    const [moreTags, setMoreTags] = useState(false);
    const { tagsData } = useTags();

    const toggleTags = () => {
        setMoreTags(() => !moreTags);
    };

    return (
        <div className="pt-3 pb-4">
            <p className="mb-4 opacity-55">Posts categories:</p>
            <div className={`mb-4 ${moreTags ? "max-h-90 overflow-y-auto scrollbar" : ""}`}>
                {tagsData?.slice(0, moreTags ? tagsData.length : 6).map((el) => (
                    <TagFilter badge_url={el.badge_url} tag={el.tag} key={el.tag_id} />
                ))}
            </div>
            <div className="flex items-center justify-between cursor-pointer" onClick={toggleTags}>
                <p className="opacity-55">{moreTags ? "Show less:" : "Show more:"}</p>
                {moreTags ? <ArrowUp size={16} className="opacity-55" /> : <ArrowDown size={16} className="opacity-55" />}
            </div>
        </div>
    );
};
