import { useQuery } from "@tanstack/react-query"
import { postsApi } from "../api/posts.api"

export const usePosts = () => {
    const { data, isPending } = useQuery({
        queryKey: [postsApi.baseKey],
        queryFn: postsApi.getAllPosts,
        select: data => data.data.data
    })

    return {
        postsData: data,
        postsPending: isPending
    }
}