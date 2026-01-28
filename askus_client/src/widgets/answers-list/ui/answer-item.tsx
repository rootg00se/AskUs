import { Avatar, AvatarFallback, AvatarImage } from "@/shared/components/ui";
import { cn } from "@/shared/lib/utils";
import moment from "moment";
import React from "react";

interface IAnswerProps {
    avatar: string;
    className?: string;
    badgeUrl: string;
    rankName: string;
    createdAt: Date;
    text: string;
    displayName: string;
    isCorrect: boolean;
}

export const AnswerItem: React.FC<IAnswerProps> = ({
    className,
    avatar,
    badgeUrl,
    rankName,
    createdAt,
    text,
    displayName,
    isCorrect,
}) => {
    return (
        <div className={cn("border-b p-5", className, isCorrect ? "shadow-[0px_0px_13px_0px_rgba(234,_179,_8,_0.5)]" : "")}>
            <div className="flex items-center gap-3 mb-3">
                <Avatar className="w-11 h-11">
                    <AvatarImage src={avatar} />
                    <AvatarFallback className="text-sm bg-[#dadada]">{displayName.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="text-md">{displayName}</span>
                        <span className="text-[12px] opacity-50">{moment(createdAt).fromNow()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="max-w-4">
                            <img src={badgeUrl} className="w-full" alt="" />
                        </div>
                        <p className="text-[14px] capitalize">{rankName}</p>
                    </div>
                </div>
            </div>
            <p className="mb-1">{text}</p>
        </div>
    );
};
