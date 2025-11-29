import { auth_method } from "@prisma/generated";

export interface IUser {
    user_id: string;
    email: string;
    display_name: string;
    avatar_url: string | null;
    is_verified: boolean;
    is_two_factor_enabled: boolean;
    method: auth_method;
    created_at: Date;
}