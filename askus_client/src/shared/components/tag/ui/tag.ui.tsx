import { usePostsFilterStore } from "@/features/posts-filter";
import { cn } from "@/shared/lib/utils";
import React, { useState } from "react";

export const Tag: React.FC<{ badge_url: string; tag: string }> = ({ badge_url, tag }) => {
    const tags = usePostsFilterStore(store => store.tags)
    const [activeTag, setActiveTag] = useState(tags.includes(tag.toLowerCase()));
    const toggleFilterTag = usePostsFilterStore((store) => store.toggleTag);

    const toggleActive = () => {
        setActiveTag(() => !activeTag);
        toggleFilterTag(tag.toLowerCase());
    };

    return (
        <div
            className={cn("flex items-center gap-3 mb-3 cursor-pointer", activeTag && "underline opacity-80 ml-2")}
            onClick={toggleActive}
        >
            <div className="max-w-7">
                <img src={badge_url} alt="" />
            </div>
            <p className="capitalize">{tag}</p>
        </div>
    );
};
