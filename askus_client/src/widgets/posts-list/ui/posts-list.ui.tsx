import React, { useEffect } from "react";
import { PostItem } from "./post-item.ui";
import { usePosts } from "@/entities/post";
import { useInView } from "react-intersection-observer";
import { chunkPosts } from "../lib/chunk-array";

export const PostsList: React.FC = () => {
    const { postsData, postsPending, fetchNextPage, hasNextPage } = usePosts();
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    if (postsPending) return null;

    const postGroups = chunkPosts(postsData || [], 4);

    return (
        <div className="mt-5">
            <div className="di">
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
            <div ref={ref}></div>
        </div>
    );
};
