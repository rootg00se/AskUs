import { useInfiniteQuery } from "@tanstack/react-query";
import { postsApi } from "../api/posts.api";
import { useMemo } from "react";

export const usePosts = (tags: string, difficulties: string, query: string) => {
    const { data, isPending, fetchNextPage, hasNextPage } = useInfiniteQuery({
        queryKey: [postsApi.baseKey, "list", tags, difficulties, query],
        queryFn: (meta) => postsApi.getAllPosts({ page: meta.pageParam, tags, difficulties, query }),
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
