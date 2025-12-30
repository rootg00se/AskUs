export const USER_RANK_INCLUDE = {
    user_ranks: {
        select: {
            points: true,
            updated_at: true,
            ranks: {
                select: {
                    name: true,
                    badge_url: true,
                    required_points: true
                },
            },
        },
    },
};
