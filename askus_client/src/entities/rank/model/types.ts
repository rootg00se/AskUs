export interface IRankResponse {
    name: string;
    badge_url: string;
    required_points: number;
    rank_id: string;
}

export interface IUserRanksResponse {
    user_rank_id: string;
    points: number;
    updated_at: Date;
    ranks: {
        name: string;
        badge_url: string;
        required_points: number;
        rank_id: string;
        next_rank: {
            name: string;
            badge_url: string;
            required_points: number;
            rank_id: string;
            points_left: number;
        };
    };
}
