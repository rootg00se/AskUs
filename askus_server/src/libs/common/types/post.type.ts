export interface IPost {
    post_id: string;
    data_key: string;
    title: string;
    user_id: string;
    post_difficulty_id: string;
    created_at: Date;
    updated_at: Date;
    post_likes?: {
        post_id: string;
        user_id: string;
    }[];
    post_difficulties: {
        post_difficulty_id: string;
        difficulty: string;
        reward: number;
    };
    users: {
        display_name: string;
        avatar_url: string | null;
    };
    posts_tags: {
        tags: {
            tag: string;
            badge_url: string
        };
    }[];
    _count: {
        post_likes: number;
    };
    closed_posts: {
        post_id: string
    }[]
}
