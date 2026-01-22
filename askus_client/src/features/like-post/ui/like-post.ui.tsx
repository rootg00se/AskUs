import { useDislikePost, useLikePost } from "@/entities/post";
import { Heart } from "lucide-react";
import React from "react";

interface ILikePostProps {
    likes: number;
    isLiked: boolean;
    postId: string;
}

export const LikePost: React.FC<ILikePostProps> = ({ likes, isLiked, postId }) => {
    const { likePostFunc } = useLikePost();
    const { dislikePostFunc } = useDislikePost();

    return (
        <div
            className={`flex items-center gap-2 cursor-pointer ${isLiked ? "text-primary" : ""}`}
            onClick={isLiked ? () => dislikePostFunc({ postId }) : () => likePostFunc({ postId })}
        >
            <Heart size={18} />
            <span className="">{likes}</span>
        </div>
    );
};
