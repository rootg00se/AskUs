import { selectUserId } from "@/entities/user";
import { TabsList, TabsTrigger } from "@/shared/components/ui";
import React from "react";
import { useParams } from "react-router-dom";

export const ProfileTabs: React.FC = () => {
    const userId = selectUserId();
    const { id } = useParams();

    return (
        <TabsList className="bg-white rounded-md p-1 flex items-center justify-start mt-3 w-full">
            <TabsTrigger value="posts" className="flex items-center gap-3 py-1 px-3 rounded-md text-foreground">
                <span>❓</span>
                <p className="text-sm opacity-80">{userId === id ? "My posts" : "User's posts"}</p>
            </TabsTrigger>
            <TabsTrigger value="answers" className="flex items-center gap-3 py-1 px-3 rounded-md text-foreground">
                <span>‼️</span>
                <p className="text-sm opacity-80">{userId === id ? "My answers" : "User's answers"}</p>
            </TabsTrigger>
            {userId === id && (
                <TabsTrigger value="ranks" className="flex items-center gap-3 py-1 px-3 rounded-md text-foreground">
                    <span>🎖</span>
                    <p className="text-sm opacity-80">Ranks</p>
                </TabsTrigger>
            )}
        </TabsList>
    );
};
