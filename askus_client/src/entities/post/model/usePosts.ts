import { useInfiniteQuery } from "@tanstack/react-query";
import { postsApi } from "../api/posts.api";
import { useMemo } from "react";

export const usePosts = () => {
    const { data, isPending, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [postsApi.baseKey, "list"],
        queryFn: (meta) => postsApi.getAllPosts({ page: meta.pageParam }),
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            return lastPage.data.has_next_page ? lastPage.data.page + 1 : undefined;
        },
    });

    const postsData = useMemo(() => data?.pages.flatMap((page) => page.data.items) ?? [], [data]);

    return {
        postsData,
        postsPending: isPending,
        fetchNextPage,
        hasNextPage,
    };
};
