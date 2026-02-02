import React from "react";
import { ProfileTabs } from "@/widgets/profile-tabs";
import { ProfileInfo } from "@/widgets/profile-info";
import { AnswersList } from "@/widgets/answers-list/ui/answers-list.ui";
import { UserRankInfo } from "@/widgets/user-rank-info/ui/user-rank-info.ui";
import { useParams } from "react-router-dom";
import { Tabs, TabsContent } from "@/shared/components/ui";
import { selectUserId } from "@/entities/user";
import { UserPostsList } from "@/widgets/user-posts-list";
import { useTabsUrlQuery } from "@/shared/hooks/useTabsUrlQuery";

export const ProfilePage: React.FC = () => {
    const { activateTab, handleTabChange } = useTabsUrlQuery("tab", "posts");

    const userId = selectUserId();
    const { id } = useParams();

    return (
        <section className="w-full max-w-180">
            <ProfileInfo />
            <Tabs value={activateTab} onValueChange={handleTabChange}>
                <ProfileTabs />
                <TabsContent value="posts">
                    <UserPostsList />
                </TabsContent>
                <TabsContent value="answers">
                    <AnswersList />
                </TabsContent>
                {userId === id && (
                    <TabsContent value="ranks">
                        <UserRankInfo />
                    </TabsContent>
                )}
            </Tabs>
        </section>
    );
};
