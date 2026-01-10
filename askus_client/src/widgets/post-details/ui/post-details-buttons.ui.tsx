import { LikePost } from "@/features/like-post";
import { MessageCircle } from "lucide-react";
import React from "react";

export const PostDetailsButton: React.FC = () => {
    return (
        <div className="flex items-center gap-4">
            <LikePost />
            <div className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span className="">3</span>
            </div>
        </div>
    );
};
