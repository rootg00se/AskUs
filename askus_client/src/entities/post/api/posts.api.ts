import { $api } from "@/shared/api/api";
import { POPULAR_POSTS_ENDPOINT, POSTS_ENDPOINT } from "../lib/constants";
import { type IPostResponse, type IPaginationPostResponse, type PostsFilterDto } from "../model/types";

export const postsApi = {
    baseKey: "posts",
    getAllPosts: async ({ page, tags, difficulties, query }: PostsFilterDto) => {
        return $api.get<IPaginationPostResponse>(
            `${POSTS_ENDPOINT}?pageLimit=8&page=${page}&tags=${tags}&difficulty=${difficulties}&query=${query}`,
        );
    },
    getPopularPosts: async () => {
        return $api.get<IPostResponse[]>(`${POPULAR_POSTS_ENDPOINT}?limit=4`);
    },
    likePost: async ({ postId }: { postId: string }) => {
        return $api.post<IPostResponse>(`${POSTS_ENDPOINT}/${postId}/like`);
    },
    dislikePost: async ({ postId }: { postId: string }) => {
        return $api.delete<IPostResponse>(`${POSTS_ENDPOINT}/${postId}/like`);
    },
};
