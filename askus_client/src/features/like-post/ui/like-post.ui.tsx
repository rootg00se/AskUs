import { useToggleLike } from "@/entities/post";
import { Heart } from "lucide-react";
import React from "react";

interface ILikePostProps {
    likes: number;
    isLiked: boolean;
    postId: string;
}

export const LikePost: React.FC<ILikePostProps> = ({ likes, isLiked, postId }) => {
    const { toggleLikePostFun } = useToggleLike(!isLiked);

    return (
        <div
            className={`flex items-center gap-2 cursor-pointer ${isLiked ? "text-primary" : ""}`}
            onClick={() => toggleLikePostFun({ postId })}
        >
            <Heart size={18} />
            <span className="">{likes}</span>
        </div>
    );
};
