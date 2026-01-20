import { Heart } from "lucide-react";
import React from "react";

export const LikePost: React.FC<{ likes: number }> = ({ likes }) => {
    return (
        <div className="flex items-center gap-2">
            <Heart size={18} />
            <span className="">{likes}</span>
        </div>
    );
};
