import { useUpdateAvatar } from "@/entities/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui";
import { File } from "lucide-react";
import React, { useRef, type ChangeEvent } from "react";

interface IUpdateAvatarProps {
    editable: boolean;
    avatarUrl: string;
    displayName: string;
}

export const UpdateAvatar: React.FC<IUpdateAvatarProps> = ({ editable, avatarUrl, displayName }) => {
    const { updateAvatarFunc } = useUpdateAvatar();

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

    return (
        <div>
            <Avatar className="w-30 h-30 mb-3 relative">
                <AvatarImage src={avatarUrl} />
                <AvatarFallback className="text-4xl bg-[#dadada]">{displayName.slice(0, 2)}</AvatarFallback>
                {editable && (
                    <div className="absolute w-full h-full bg-[#000000bb] flex items-center justify-center" onClick={selectFile}>
                        <File className="text-white" size={40} />
                    </div>
                )}
            </Avatar>
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleUpdateAvatar(e)}
                className="hidden"
                name="avatar"
                accept=".png, .jpg, .jpeg, .svg, .webp"
            />
        </div>
    );
};
