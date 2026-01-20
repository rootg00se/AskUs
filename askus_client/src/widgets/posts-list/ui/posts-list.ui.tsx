import React from "react";
import { PostItem } from "./post-item.ui";
import { usePosts, type PostData } from "@/entities/post";

export const PostsList: React.FC = () => {
    const { postsData, postsPending } = usePosts();

    if (postsPending) return null;

    const chunkArray = (arr: any[], size: number) => {
        const chunks = [];

        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }

        return chunks;
    };

    const postGroups: PostData[][] = chunkArray(postsData || [], 4);

    return (
        <div className="mt-5">
            {postGroups.map((group, groupIndex) => (
                <div key={`group-${groupIndex}`} className="rounded-md px-5 bg-white mb-7">
                    {group!.map((post, postIndex) => (
                        <PostItem
                            difficulty_badge={post.post_difficulties.badge_url}
                            avatar={post.users.avatar_url}
                            createdAt={post.created_at}
                            title={post.title}
                            tags={post.tags}
                            key={post.post_id}
                            displayName={post.users.display_name}
                            className={postIndex === group.length - 1 ? "border-none" : ""}
                            likes={post.likes}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};
