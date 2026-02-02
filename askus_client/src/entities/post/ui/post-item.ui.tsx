import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/shared/lib/utils";
import { LikePost } from "@/features/like-post";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui";
import moment from "moment";
import { type TagData } from "@/entities/post";
import { Link } from "react-router-dom";

interface IPostItemProps {
    postId: string;
    createdAt: Date;
    tags: TagData[];
    title: string;
    displayName: string;
    avatar: string;
    className?: string;
    likes: number;
    difficulty_badge: string;
    userId: string
    isLiked: boolean;
    isClosed: boolean;
}

export const PostItem: React.FC<IPostItemProps> = ({
    postId,
    className,
    createdAt,
    tags,
    title,
    displayName,
    avatar,
    likes,
    difficulty_badge,
    isLiked,
    userId,
    isClosed
}) => { 
    return (
        <div className={cn("py-4 border-b", className)}>
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4 mb-3">
                        <Avatar className="w-12 h-12">
                            <AvatarImage src={avatar} />
                            <AvatarFallback className="text-sm bg-[#dadada]">{displayName.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <Link to={`/profile/${userId}`} className="hover:underline">{displayName}</Link>
                                <span className="text-sm opacity-50">{moment(createdAt).fromNow()}</span>
                            </div>
                            <div className="flex items-center gap-2 ml-2">
                                <div className="flex">
                                    {tags.map((el) => (
                                        <div className="max-w-5 -ml-2" key={el.tag}>
                                            <img src={el.badge_url} className="w-full" alt="" />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-[14px] capitalize">{tags[0]?.tag || "Empty tag"}</p>
                                {isClosed && <p className="text-sm opacity-50">Closed</p>}
                            </div>
                        </div>
                    </div>
                    <div className="max-w-6">
                        <img src={difficulty_badge} className="w-full" alt="" />
                    </div>
                </div>
                <Link to={`/post/${postId}`} className="text-lg font-medium mb-3 hover:underline">{title}</Link>
                <div className="flex items-center gap-4 mt-3">
                    <LikePost isLiked={isLiked} postId={postId} likes={likes} />
                    <div className="flex items-center gap-2">
                        <MessageCircle size={18} />
                        <span className="">Write</span>
                    </div>
                </div>
        </div>
    );
};
