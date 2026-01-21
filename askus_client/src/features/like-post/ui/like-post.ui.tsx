import { cn } from "@/shared/lib/utils";
import { Heart } from "lucide-react";
import React from "react";

interface ILikePostProps {
    className?: string;
    likes: number;
    onClick: () => void;
}

export const LikePost: React.FC<ILikePostProps> = ({ likes, className, onClick }) => {
    return (
        <div className={cn("flex items-center gap-2 cursor-pointer", className)} onClick={onClick}>
            <Heart size={18} />
            <span className="">{likes}</span>
        </div>
    );
};
