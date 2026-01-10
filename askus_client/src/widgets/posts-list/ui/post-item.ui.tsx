import React from "react";
import { MessageCircle } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import icon6 from "@/shared/assets/images/test-icon-6.png";
import avatar from "@/shared/assets/images/test-avatar.jpg";
import { cn } from "@/shared/lib/utils";
import { LikePost } from "@/features/like-post";

export const PostItem: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn("py-4 border-b", className)}>
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-4 mb-3">
                    <div className="rounded-full max-w-12">
                        <img src={avatar} className="w-full rounded-full" alt="" />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="">RootG00se</span>
                            <span className="text-sm opacity-50">1 hour ago</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="max-w-5">
                                <img src={icon} className="w-full" alt="" />
                            </div>
                            <p className="text-[14px]">Programming</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-6">
                    <img src={icon6} className="w-full" alt="" />
                </div>
            </div>
            <p className="text-lg font-medium mb-3">How to get platina in sekiro?</p>
            <div className="flex items-center gap-4">
                <LikePost />
                <div className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    <span className="">3</span>
                </div>
            </div>
        </div>
    );
};
