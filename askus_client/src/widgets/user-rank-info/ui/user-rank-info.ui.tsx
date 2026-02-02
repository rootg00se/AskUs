import { RankInfo, useRanks, useUserRanks } from "@/entities/rank";
import { selectUserId } from "@/entities/user";
import React from "react";
import { RankProgress } from "@/features/rank-progress";

export const UserRankInfo: React.FC = () => {
    const userId = selectUserId();

    const { ranksData } = useRanks();
    const { userRanksData } = useUserRanks(userId!);

    if (!ranksData) return null;
    if (!userRanksData) return null;

    return (
        <div className="rounded-md px-5 py-4 bg-white mb-7">
            <div className="mb-4">
                <p className="text-lg mb-6">Your rank status:</p>
                <RankProgress userId={userId!} />
            </div>
            <div className="">
                <p className="text-lg mb-4">All ranks:</p>
                <div className="flex flex-wrap gap-7">
                    {ranksData.map((rank) => (
                        <RankInfo
                            name={rank.name}
                            badge_url={rank.badge_url}
                            required_points={rank.required_points}
                            key={rank.rank_id}
                            className={userRanksData.points < rank.required_points ? "opacity-30" : ""}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
