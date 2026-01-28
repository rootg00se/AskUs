import React from "react";
import { cn } from "@/shared/lib/utils";
import { usePostsFilterStore } from "@/features/posts-filter";

interface IDifficultyProps {
    className?: string;
    badge_url: string;
    difficulty: string;
}

export const DifficultyFilter: React.FC<IDifficultyProps> = ({ className, difficulty, badge_url }) => {
    const difficulties = usePostsFilterStore((store) => store.difficulties);
    const toggleFilterTag = usePostsFilterStore((store) => store.toggleDifficulty);

    const toggleActive = () => {
        toggleFilterTag(difficulty.toLowerCase());
    };

    return (
        <div
            className={cn(
                "flex items-center gap-3 cursor-pointer",
                className,
                difficulties.includes(difficulty.toLowerCase()) && "underline opacity-80 ml-2",
            )}
            onClick={toggleActive}
        >
            <div className="max-w-7">
                <img src={badge_url} alt="" />
            </div>
            <p className="capitalize">{difficulty}</p>
        </div>
    );
};
