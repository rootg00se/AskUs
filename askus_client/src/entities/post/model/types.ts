import type { IResponse } from "@/shared/types/response.type";

export type TagData = {
    tag: string;
    badge_url: string;
}

export type PostData = {
    post_id: string;
    data_key: string;
    data_url: string;
    title: string;
    description: string;
    is_closed: boolean;
    likes: number;
    tags: TagData[];
    created_at: Date;
    updated_at: Date;
    post_difficulties: {
        post_difficulty_id: string;
        difficulty: string;
        reward: number;
        badge_url: string;
    };
    users: {
        display_name: string;
        avatar_url: string;
    };
    isLiked: true;
};

export interface IPostResponse extends IResponse {
    data: PostData;
}

export interface IPostsArrayResponse extends IResponse {
    data: PostData[];
}
