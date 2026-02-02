import React from "react";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/shared/components/ui";
import { selectUserId, useProfile } from "@/entities/user";
import { useParams } from "react-router-dom";
import { Rank } from "@/entities/rank";

export const ProfileInfo: React.FC = () => {
    const { id } = useParams();
    const { userProfileData } = useProfile(id || "");

    const authUserId = selectUserId();

    return (
        <div className="bg-white rounded-md p-5 flex items-start justify-between">
            <div className="">
                <Avatar className="w-30 h-30 mb-3">
                    <AvatarImage src={userProfileData?.avatar_url} />
                    <AvatarFallback className="text-4xl bg-[#dadada]">{userProfileData?.display_name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="">
                    <div className="mb-5">
                        <p className="text-3xl font-medium">{userProfileData?.display_name}</p>
                        <p className="text-sm opacity-50">{userProfileData?.email}</p>
                    </div>
                    <Rank
                        badge_url={userProfileData?.user_ranks.ranks.badge_url || ""}
                        name={userProfileData?.user_ranks.ranks.name || ""}
                    />
                </div>
            </div>
            <div className="w-full max-w-40">
                {authUserId && authUserId === id && <Button className="mb-4 w-full">Edit profile</Button>}
                <div className="max-w-8 ml-auto">
                    <img src={userProfileData?.user_ranks.ranks.badge_url} className="w-full" alt="" />
                </div>
            </div>
        </div>
    );
};
