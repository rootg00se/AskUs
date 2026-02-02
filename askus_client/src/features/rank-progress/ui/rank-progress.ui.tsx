import { useUserRanks } from "@/entities/rank";
import { cn } from "@/shared/lib/utils";
import moment from "moment";
import React from "react";

export const RankProgress: React.FC<{ userId: string }> = ({ userId }) => {
    const { userRanksData } = useUserRanks(userId!);

    if (!userRanksData) return null;

    const ranksPercent = Math.round(
        (userRanksData.ranks.next_rank.points_left / userRanksData.ranks.next_rank.required_points) * 100,
    );

    return (
        <div className="flex justify-between mb-8">
            <div className="flex items-center gap-3 w-full">
                <div className="text-center">
                    <div className="max-w-7 mx-auto">
                        <img src={userRanksData.ranks.badge_url} alt="" />
                    </div>
                    <p className="capitalize text-sm opacity-80 max-w-25">{userRanksData.ranks.name}</p>
                </div>
                <div className="w-full mb-6 max-w-50 h-2 rounded-full bg-[#dad9d9] relative">
                    <div
                        className={cn("absolute top-0 left-0 h-2 bg-primary z-5 rounded-full")}
                        style={{ width: `${ranksPercent}%` }}
                    />
                </div>
                <div className="text-center">
                    <div className="max-w-7 mx-auto">
                        <img src={userRanksData.ranks.next_rank.badge_url} alt="" />
                    </div>
                    <p className="capitalize text-sm opacity-80 max-w-25">{userRanksData.ranks.next_rank.name}</p>
                </div>
            </div>
            <div className="w-full max-w-70">
                <p>
                    <span className="opacity-75">Your points:</span> {userRanksData.points}
                </p>
                <p>
                    <span className="opacity-75">Points to the next rank:</span> {userRanksData.ranks.next_rank.points_left}
                </p>
                <p>
                    <span className="opacity-75">Last time when points get:</span> {moment(userRanksData.updated_at).fromNow()}
                </p>
            </div>
        </div>
    );
};
