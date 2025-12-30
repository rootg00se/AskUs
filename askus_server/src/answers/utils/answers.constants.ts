export const ANSWERS_INCLUDE = {
    users: {
        select: {
            display_name: true,
            avatar_url: true,
            user_ranks: {
                include: { ranks: { omit: { rank_id: true } } },
                omit: { user_id: true, rank_id: true, user_rank_id: true },
            },
        },
    },
    closed_posts: { select: { answer_id: true } },
    _count: { select: { other_answers: true } },
};

export const ANSWERS_OMIT = {
    omit: { post_id: true, user_id: true },
};
