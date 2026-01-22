import { usePopularPosts } from "@/entities/post";
import React from "react";
import { PostItem } from "./post-item.ui";

export const PopularPostsList: React.FC = () => {
    const { popularPostsData } = usePopularPosts();

    if (!popularPostsData) return null;

    return (
        <div className="mt-2">
            <div className="di">
                <div className="rounded-md px-5 bg-white mb-7">
                    {popularPostsData!.map((post, postIndex) => (
                        <PostItem
                            userId={post.users.user_id}
                            postId={post.post_id}
                            isLiked={post.is_liked || false}
                            difficulty_badge={post.post_difficulties.badge_url}
                            avatar={post.users.avatar_url}
                            createdAt={post.created_at}
                            title={post.title}
                            tags={post.tags}
                            key={post.post_id}
                            displayName={post.users.display_name}
                            className={postIndex === popularPostsData!.length - 1 ? "border-none" : ""}
                            likes={post.likes}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
