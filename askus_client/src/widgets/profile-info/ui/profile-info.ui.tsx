import React, { useState } from "react";
import { Button } from "@/shared/components/ui";
import { selectUserId, useProfile } from "@/entities/user";
import { useParams } from "react-router-dom";
import { Rank } from "@/entities/rank";
import { LogoutButton } from "@/features/logout-button";
import { UpdateAvatar } from "@/features/update-avatar";
import { UpdateNickname } from "@/features/update-nickname";

export const ProfileInfo: React.FC = () => {
    const [editMode, setEditMode] = useState(false);

    const { id } = useParams();
    const { userProfileData } = useProfile(id || "");

    const authUserId = selectUserId();

    const toggleEditMode = () => {
        setEditMode(() => !editMode);
    };

    if (!userProfileData) return null;

    return (
        <div className="bg-white rounded-md p-5 flex items-start justify-between">
            <div className="w-full">
                <UpdateAvatar
                    editable={editMode}
                    avatarUrl={userProfileData.avatar_url}
                    displayName={userProfileData.display_name}
                />
                <div className="">
                    <div className="mb-5">
                        {editMode ? (
                            <UpdateNickname displayName={userProfileData.display_name} />
                        ) : (
                            <p className="text-3xl font-medium">{userProfileData.display_name}</p>
                        )}
                        <p className="text-sm opacity-50">{userProfileData.email}</p>
                    </div>
                    <Rank badge_url={userProfileData?.user_ranks.ranks.badge_url} name={userProfileData?.user_ranks.ranks.name} />
                </div>
            </div>
            <div className="w-full max-w-40">
                {(authUserId && authUserId) === id && (
                    <Button onClick={toggleEditMode} className="mb-4 w-full" variant={editMode ? "secondary" : "default"}>
                        {editMode ? "Cancel" : "Edit profile"}
                    </Button>
                )}
                <div className="inline-flex flex-row-reverse items-center gap-4 float-right">
                    <Rank badge_url={userProfileData?.user_ranks.ranks.badge_url} size="lg" showName={false} />
                    {authUserId && authUserId === id && <LogoutButton />}
                </div>
            </div>
        </div>
    );
};
