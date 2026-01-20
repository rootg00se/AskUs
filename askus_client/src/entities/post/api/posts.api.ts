import { $api } from "@/shared/api/api";
import { POSTS_ENDPOINT } from "../lib/constants";
import type { IPostsArrayResponse } from "../model/types";

export const postsApi = {
    baseKey: "posts",
    getAllPosts: async () => {
        return $api.get<IPostsArrayResponse>(POSTS_ENDPOINT);
    },
};
