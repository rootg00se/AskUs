import { $api } from "@/shared/api/api";
import { POSTS_ENDPOINT } from "../lib/constants";
import { type IPostResponse, type IPaginationPostResponse } from "../model/types";

export const postsApi = {
    baseKey: "posts",
    getAllPosts: async ({ page }: { page: number }) => {
        return $api.get<IPaginationPostResponse>(`${POSTS_ENDPOINT}?pageLimit=8&page=${page}`);
    },
    likePost: async ({ postId }: { postId: string }) => {
        return $api.post<IPostResponse>(`${POSTS_ENDPOINT}/${postId}/like`);
    },
    dislikePost: async ({ postId }: { postId: string }) => {
        return $api.delete<IPostResponse>(`${POSTS_ENDPOINT}/${postId}/like`);
    }
};
