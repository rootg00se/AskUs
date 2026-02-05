import { useQuery } from "@tanstack/react-query";
import { postsApi } from "../api/posts.api";

export const usePostById = (postId: string) => {
    const { data, isPending } = useQuery({
        queryKey: [postsApi.baseKey, postId],
        queryFn: () => postsApi.getPostById(postId),
        select: (data) => data.data,
    });

    return {
        postData: data,
        isPostPending: isPending,
    };
};
