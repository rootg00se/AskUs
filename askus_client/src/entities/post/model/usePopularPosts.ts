import { useQuery } from "@tanstack/react-query";
import { postsApi } from "../api/posts.api";

export const usePopularPosts = () => {
    const { data, isPending } = useQuery({
        queryKey: [postsApi.baseKey, "popular"],
        queryFn: postsApi.getPopularPosts,
        select: (data) => data.data,
    });

    return {
        popularPostsData: data,
        isPopularPostsPending: isPending
    }
};
