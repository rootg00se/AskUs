export interface IUserResponse {
    user_id: string;
    email: string;
    display_name: string;
    avatar_url: string;
    is_verified: boolean;
    is_two_factor_enabled: boolean;
    created_at: Date;
    method: "credentials" | "oauth";
    phone: string;
    user_ranks: {
        points: number;
        updated_at: Date;
        ranks: {
            name: string;
            badge_url: string;
            required_points: number;
        };
    };
}
