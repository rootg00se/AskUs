import { useQuery } from "@tanstack/react-query";
import { postsApi } from "../api/posts.api";

export const useUserPosts = (userId: string) => {
    const { data, isPending } = useQuery({
        queryKey: [postsApi.baseKey, "list", userId],
        queryFn: () => postsApi.getUserPosts(userId),
        select: (data) => data.data,
    });

    return {
        userPostsData: data,
        isUserPostsPending: isPending
    }
};
