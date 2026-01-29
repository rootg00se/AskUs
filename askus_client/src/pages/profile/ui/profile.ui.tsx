import React, { useEffect, useState } from "react";
import { UserPostsList } from "@/widgets/posts-list";
import { ProfileTabs } from "@/widgets/profile-tabs";
import { ProfileInfo } from "@/widgets/profile-info";
import { AnswersList } from "@/widgets/answers-list/ui/answers-list.ui";
import { UserRankInfo } from "@/widgets/user-rank-info/ui/user-rank-info.ui";
import { useParams, useSearchParams } from "react-router-dom";
import { Tabs, TabsContent } from "@/shared/components/ui";
import { selectUserId } from "@/entities/user";

export const ProfilePage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activateTab, setActivateTab] = useState(searchParams.get("tab") || "posts");

    const userId = selectUserId();
    const { id } = useParams();

    const handleTabChange = (value: string) => {
        setActivateTab(value);

        setSearchParams((prevParams) => {
            prevParams.set("tab", value);
            return prevParams;
        });
    };

    useEffect(() => {
        setActivateTab(searchParams.get("tab") || "posts")
    }, [searchParams]);

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
