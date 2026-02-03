import React, { useRef, useState, type ChangeEvent } from "react";
import { Avatar, AvatarFallback, AvatarImage, Button } from "@/shared/components/ui";
import { selectUserId, useProfile, useUpdateAvatar, useUpdateNickname } from "@/entities/user";
import { useParams } from "react-router-dom";
import { Rank } from "@/entities/rank";
import { useLogout } from "@/entities/auth";
import { File, LogOut } from "lucide-react";
import { Input } from "@/shared/components/ui/input";

export const ProfileInfo: React.FC = () => {
    const [editMode, setEditMode] = useState(false);
    const [nickname, setNickname] = useState("");

    const { id } = useParams();
    const { userProfileData } = useProfile(id || "");
    const { logoutFunc } = useLogout();
    const { updateNicknameFunc, isUpdateNicknamePending } = useUpdateNickname();
    const { updateAvatarFunc } = useUpdateAvatar();

    const authUserId = selectUserId();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const selectFile = () => fileInputRef.current?.click();

    const handleUpdateAvatar = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;

        if (file) {
            const formData = new FormData();
            formData.append("avatar", file);

            updateAvatarFunc(formData);
        }
    };

    const toggleEditMode = () => {
        setEditMode(() => !editMode);
    };

    return (
        <div className="bg-white rounded-md p-5 flex items-start justify-between">
            <div className="w-full">
                <Avatar className="w-30 h-30 mb-3 relative">
                    <AvatarImage src={userProfileData?.avatar_url} />
                    <AvatarFallback className="text-4xl bg-[#dadada]">{userProfileData?.display_name.slice(0, 2)}</AvatarFallback>
                    {editMode && (
                        <div className="absolute w-full h-full bg-[#000000bb] flex items-center justify-center" onClick={selectFile}>
                            <File className="text-white" size={40} />
                        </div>
                    )}
                </Avatar>
                <input type="file" ref={fileInputRef} onChange={(e) => handleUpdateAvatar(e)} className='hidden' name='avatar' accept='.png, .jpg, .jpeg, .svg, .webp' />
                <div className="">
                    <div className="mb-5">
                        {editMode ? (
                            <div className="flex items-center gap-2 mb-2">
                                <Input
                                    defaultValue={userProfileData?.display_name}
                                    onChange={(e) => setNickname(e.target.value)}
                                    className="w-full max-w-60"
                                />
                                <Button disabled={isUpdateNicknamePending} onClick={() => updateNicknameFunc(nickname)}>
                                    Save
                                </Button>
                            </div>
                        ) : (
                            <p className="text-3xl font-medium">{userProfileData?.display_name}</p>
                        )}
                        <p className="text-sm opacity-50">{userProfileData?.email}</p>
                    </div>
                    <Rank
                        badge_url={userProfileData?.user_ranks.ranks.badge_url || ""}
                        name={userProfileData?.user_ranks.ranks.name || ""}
                    />
                </div>
            </div>
            <div className="w-full max-w-40">
                {(authUserId && authUserId) === id && (
                    <Button onClick={toggleEditMode} className="mb-4 w-full" variant={editMode ? "secondary" : "default"}>
                        {editMode ? "Cancel" : "Edit profile"}
                    </Button>
                )}
                <div className="inline-flex flex-row-reverse items-center gap-4 float-right">
                    <div className="max-w-8 ml-auto">
                        <img src={userProfileData?.user_ranks.ranks.badge_url} className="w-full" alt="" />
                    </div>
                    {authUserId && authUserId === id && (
                        <LogOut onClick={() => logoutFunc()} className=" cursor-pointer text-primary float-right" />
                    )}
                </div>
            </div>
        </div>
    );
};
