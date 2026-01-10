import React from "react";
import { PostItem } from "./post-item.ui";

export const PostsList: React.FC = () => {
    return (
        <div className="rounded-md px-5 bg-white mb-7">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem className="border-none" />
        </div>
    );
};
