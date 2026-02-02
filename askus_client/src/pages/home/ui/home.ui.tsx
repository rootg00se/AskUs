import React from "react";
import { PostTabs } from "@/widgets/post-tabs";
import { PostsList } from "@/widgets/posts-list";
import { Tabs, TabsContent } from "@/shared/components/ui";
import { PopularPostsList } from "@/widgets/popular-posts-list";
import { useTabsUrlQuery } from "@/shared/hooks/useTabsUrlQuery";

export const HomePage: React.FC = () => {
    const { activateTab, handleTabChange } = useTabsUrlQuery("posts", "all");

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
