export interface IAnswerResponse {
    answer_id: string;
    text: string;
    is_correct: boolean;
    post_id: string;
    create_at: Date;
    has_replies: boolean;
    users: {
        display_name: string;
        avatar_url: string;
        user_ranks: {
            points: number;
            updated_at: Date;
            ranks: {
                name: string;
                badge_url: string;
                required_points: number;
            };
        };
    };
}
