import { useDifficulties } from "@/entities/difficulty";
import { Difficulty } from "@/shared/components/difficulty";
import React from "react";

export const SidebarDifficulties: React.FC = () => {
    const { difficultiesData } = useDifficulties();

    return (
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
    );
};
