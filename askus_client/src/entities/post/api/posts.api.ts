import { $api } from "@/shared/api/api";
import { POSTS_ENDPOINT } from "../lib/constants";
import type { IPaginationPostResponse } from "../model/types";

export const postsApi = {
    baseKey: "posts",
    getAllPosts: async ({ page }: { page: number }) => {
        return $api.get<IPaginationPostResponse>(`${POSTS_ENDPOINT}?pageLimit=8&page=${page}`);
    },
};
