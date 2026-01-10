import React from "react";
import { PostsList } from "@/widgets/posts-list";
import { ProfileTabs } from "@/widgets/profile-tabs";
import { ProfileInfo } from "@/widgets/profile-info";

export const ProfilePage: React.FC = () => {
    return (
        <section className="w-full max-w-180">
            <ProfileInfo />
            <ProfileTabs />
            <PostsList />
        </section>
    );
};
