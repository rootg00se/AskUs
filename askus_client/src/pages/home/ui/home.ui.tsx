import React, { useState } from "react";
import { PostTabs } from "@/widgets/post-tabs";
import { PostsList } from "@/widgets/posts-list";
import { Tabs, TabsContent } from "@/shared/components/ui";
import { PopularPostsList } from "@/widgets/posts-list/ui/popular-posts-list.ui";
import { useSearchParams } from "react-router-dom";

export const HomePage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activateTab, setActivateTab] = useState(searchParams.get("posts") || "all");

    const handleTabChange = (value: string) => {
        setActivateTab(value);

        setSearchParams((prevParams) => {
            prevParams.set("posts", value);
            return prevParams;
        });
    };

    return (
        <section className="w-full max-w-180">
            <Tabs value={activateTab} onValueChange={handleTabChange}>
                <PostTabs />
                <TabsContent value="all">
                    <PostsList />
                </TabsContent>
                <TabsContent value="popular">
                    <PopularPostsList />
                </TabsContent>
            </Tabs>
        </section>
    );
};
