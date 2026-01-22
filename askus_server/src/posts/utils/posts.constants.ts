export const POSTS_OMIT = {
    omit: {
        user_id: true,
        post_difficulty_id: true,
    },
};

export const POSTS_INCLUDE = {
    _count: {
        select: { post_likes: true },
    },
    post_difficulties: { omit: { post_difficulty_id: true } },
    users: {
        select: {
            user_id: true,
            display_name: true,
            avatar_url: true,
        },
    },
    posts_tags: {
        include: {
            tags: { omit: { tag_id: true } },
        },
    },
    closed_posts: {
        select: { post_id: true },
    },
};
