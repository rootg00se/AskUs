export interface IAnswer {
    post_id: string;
    user_id: string;
    created_at: Date | null;
    answer_id: string;
    text: string;
    parent_id: string | null;
    closed_posts: {
        answer_id: string;
    }[];
    users: {
        display_name: string;
        avatar_url: string | null;
        user_ranks:
            | ({
                  ranks: {
                      name: string;
                      rank_id: string;
                      required_points: number;
                      badge_url: string;
                  };
              } & {
                  user_id: string;
                  updated_at: Date;
                  user_rank_id: string;
                  points: number;
                  rank_id: string;
              })
            | null;
    };
    _count: {
        other_answers: number;
    };
}
