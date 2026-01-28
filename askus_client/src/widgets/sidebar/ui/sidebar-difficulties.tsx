import { useDifficulties } from "@/entities/difficulty";
import { DifficultyFilter } from "@/features/difficulty-filter";
import React from "react";

export const SidebarDifficulties: React.FC = () => {
    const { difficultiesData } = useDifficulties();

    return (
        <div className="py-3">
            <p className="mb-4 opacity-55">Posts difficulties:</p>
            <div className="mb-8">
                {difficultiesData?.map((el) => (
                    <DifficultyFilter
                        difficulty={el.difficulty}
                        badge_url={el.badge_url}
                        key={el.post_difficulty_id}
                        className="mb-3"
                    />
                ))}
            </div>
        </div>
    );
};
