import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/components/ui";
import React from "react";
import { PlusCircle } from "lucide-react";
import icon from "@/shared/assets/images/text-icon.png";
import avatar from "@/shared/assets/images/test-avatar.jpg";
import { Rank } from "@/entities/rank";

export const PostAnswer: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={cn("border-b py-3", className)}>
            <div className="flex items-center gap-3 mb-3">
                <div className="rounded-full max-w-11">
                    <img src={avatar} className="w-full rounded-full" alt="" />
                </div>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-md">Legend</span>
                        <span className="text-[12px] opacity-50">1 hour ago</span>
                    </div>
                    <Rank size="sm" badge_url={icon} name={"baby"} />
                </div>
            </div>
            <p className="mb-1">Please bro just take shower already 🙏🙏🙏</p>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 opacity-70">
                    <PlusCircle size={16} />
                    <span className="text-sm">1 Answers</span>
                </div>
                <Button variant={"link"}>Answer</Button>
            </div>
        </div>
    );
};
