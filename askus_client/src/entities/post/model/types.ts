export type TagData = {
    tag: string;
    badge_url: string;
};

export interface IPostResponse {
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
    is_liked?: boolean;
};

export interface IPaginationPostResponse {
    items: IPostResponse[];
    total_page: number;
    has_next_page: boolean;
    page: number;
    total: number;
    page_limit: number;
};
