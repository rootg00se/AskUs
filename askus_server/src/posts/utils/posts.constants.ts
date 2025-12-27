export const POSTS_OMIT = {
    omit: { 
        user_id: true, 
        post_difficulty_id: true 
    },
};

export const POSTS_INCLUDE = {
    _count: {
        select: { post_likes: true },
    },
    post_difficulties: { omit: { post_difficulty_id: true } },
    users: {
        select: {
            display_name: true,
            avatar_url: true,
        },
    },
    posts_tags: {
        select: {
            tags: { select: { tag: true } },
        },
    },
};
