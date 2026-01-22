import { TabsList, TabsTrigger } from "@/shared/components/ui";
import React from "react";

export const PostTabs: React.FC = () => {
    return (
        <TabsList className="bg-white rounded-md w-full p-1 flex items-center justify-start">
            <TabsTrigger value="all" className="flex items-center gap-3 py-1 px-3 rounded-md text-foreground">
                <span>🌱</span>
                <p className="text-sm opacity-80">New</p>
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-3 py-1 px-3 rounded-md text-foreground">
                <span>🔥</span>
                <p className="text-sm opacity-80">Popular</p>
            </TabsTrigger>
        </TabsList>
    );
};
