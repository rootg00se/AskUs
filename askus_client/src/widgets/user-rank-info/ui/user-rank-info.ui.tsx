import { useRanks, useUserRanks } from "@/entities/rank";
import { selectUserId } from "@/entities/user";
import React from "react";
import moment from "moment";
import { cn } from "@/shared/lib/utils";

export const UserRankInfo: React.FC = () => {
    const userId = selectUserId();

    const { ranksData } = useRanks();
    const { userRanksData } = useUserRanks(userId!);

    if (!ranksData) return null;
    if (!userRanksData) return null;

    const ranksPercent = Math.round(
        (userRanksData.ranks.next_rank.points_left / userRanksData.ranks.next_rank.required_points) * 100,
    );

    return (
        <div className="rounded-md px-5 py-4 bg-white mb-7">
            <div className="mb-4">
                <p className="text-lg mb-6">Your rank status:</p>
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
                        <p><span className="opacity-75">Your points:</span> {userRanksData.points}</p>
                        <p><span className="opacity-75">Points to the next rank:</span> {userRanksData.ranks.next_rank.points_left}</p>
                        <p><span className="opacity-75">Last time when points get:</span> {moment(userRanksData.updated_at).fromNow()}</p>
                    </div>
                </div>
            </div>
            <div className="">
                <p className="text-lg mb-4">All ranks:</p>
                <div className="flex flex-wrap gap-7">
                    {ranksData.map((rank) => (
                        <div
                            className={cn(
                                "flex-1/5 text-center",
                                userRanksData.points < rank.required_points ? "opacity-30" : "",
                            )}
                            key={rank.rank_id}
                        >
                            <div className="max-w-13 mb-3 mx-auto">
                                <img src={rank.badge_url} alt="" />
                            </div>
                            <p className="capitalize leading-4">{rank.name}</p>
                            <p className="text-sm opacity-50">Reuiered point: {rank.required_points}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
