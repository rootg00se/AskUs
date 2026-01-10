import React from "react";
import { PostTabs } from "@/widgets/post-tabs";
import { PostsList } from "@/widgets/posts-list";

export const HomePage: React.FC = () => {
    return (
        <section className="w-full max-w-180">
            <PostTabs />
            <div className="mt-5">
                <PostsList />
                <PostsList />
            </div>
        </section>
    );
};
