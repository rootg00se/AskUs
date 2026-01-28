import { usePostsFilterStore } from "@/features/posts-filter";
import { cn } from "@/shared/lib/utils";
import React from "react";

export const TagFilter: React.FC<{ badge_url: string; tag: string }> = ({ badge_url, tag }) => {
    const tags = usePostsFilterStore((store) => store.tags);
    const toggleFilterTag = usePostsFilterStore((store) => store.toggleTag);

    const toggleActive = () => {
        toggleFilterTag(tag.toLowerCase());
    };

    return (
        <div
            className={cn(
                "flex items-center gap-3 mb-3 cursor-pointer",
                tags.includes(tag.toLowerCase()) && "underline opacity-80 ml-2",
            )}
            onClick={toggleActive}
        >
            <div className="max-w-7">
                <img src={badge_url} alt="" />
            </div>
            <p className="capitalize">{tag}</p>
        </div>
    );
};
