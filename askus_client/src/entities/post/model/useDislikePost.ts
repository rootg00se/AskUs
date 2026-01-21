import { useMutation, type InfiniteData } from "@tanstack/react-query";
import { postsApi } from "../api/posts.api";
import { queryClient } from "@/app/providers/query-client";
import type { AxiosResponse } from "axios";
import type { IPaginationPostResponse } from "./types";
import { toast } from "react-toastify";
import type { IErrorResponse } from "@/shared/types/error-response.type";

export const useDislikePost = () => {
    const dislikePostMutation = useMutation({
        mutationKey: [postsApi.baseKey, "dislike"],
        mutationFn: postsApi.dislikePost,
        onMutate: async (params) => {
            await queryClient.cancelQueries({ queryKey: [postsApi.baseKey] });
            const previousPosts: InfiniteData<AxiosResponse<IPaginationPostResponse>> = queryClient.getQueryData([
                postsApi.baseKey,
                "list",
            ])!;

            queryClient.setQueryData([postsApi.baseKey, "list"], () => {
                const newPosts = previousPosts.pages.map((page) =>
                    page.data.items.map((post) => (post.post_id === params.postId ? { ...post, isLiked: true } : post)),
                );

                return { ...previousPosts, data: newPosts };
            });

            return { previousPosts };
        },
        onError: (error: IErrorResponse, _, context) => {
            queryClient.setQueryData([postsApi.baseKey, "list"], context?.previousPosts);

            toast.error(error.response.data.message);
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [postsApi.baseKey, "list"] });
        },
    });

    return {
        dislikePostFunc: dislikePostMutation.mutate,
        isDislikePostPending: dislikePostMutation.isPending,
    };
};
