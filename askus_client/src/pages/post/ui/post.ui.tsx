import React from "react";
import { SendAnswer } from "@/features/send-answer";
import { PostDetails } from "@/widgets/post-details";
import { PostAnswer } from "@/widgets/post-answer";

export const PostPage: React.FC = () => {
    return (
        <section className="w-full max-w-180">
            <div className="bg-white rounded-md p-5">
                <PostDetails />
                <SendAnswer />
                <div className="mt-10">
                    <PostAnswer />
                    <PostAnswer />
                    <PostAnswer />
                    <PostAnswer className="border-none" />
                </div>
            </div>
        </section>
    );
};
