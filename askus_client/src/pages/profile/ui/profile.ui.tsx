import React from "react";
import { UserPostsList } from "@/widgets/posts-list";
import { ProfileTabs } from "@/widgets/profile-tabs";
import { ProfileInfo } from "@/widgets/profile-info";
import { AnswersList } from "@/widgets/answers-list/ui/answers-list.ui";
import { UserRankInfo } from "@/widgets/user-rank-info/ui/user-rank-info.ui";

export const ProfilePage: React.FC = () => {
    return (
        <section className="w-full max-w-180">
            <ProfileInfo />
            <ProfileTabs />
            {/* <UserPostsList /> */}
            {/* <AnswersList /> */}
            <UserRankInfo />
        </section>
    );
};
