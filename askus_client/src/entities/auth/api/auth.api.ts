import { $api } from "@/shared/api/api";
import { type IAuthResponse, type ITwoFactorResponse, type SignUpDto } from "../model/types";
import { AUTH_ENDPOINTS } from "../lib/constants";

export const authApi = {
    baseKey: "auth",
    signUp: async (data: SignUpDto) => {
        return $api.post<IAuthResponse>(AUTH_ENDPOINTS.SIGN_UP, data);
    },
    signIn: async (data: { email: string; password: string }) => {
        return $api.post<ITwoFactorResponse | IAuthResponse>(AUTH_ENDPOINTS.SIGN_IN, data);
    },
    resetPassword: async (data: { email: string }) => {
        return $api.post(AUTH_ENDPOINTS.RESET_PASSWORD, data);
    },
    newPassword: async (data: { password: string; token: string }) => {
        return $api.post<IAuthResponse>(`${AUTH_ENDPOINTS.NEW_PASSWORD}?token=${data.token}`, { password: data.password });
    },
    twoFactorAuth: async (data: { code: string }) => {
        return $api.post<IAuthResponse>(`${AUTH_ENDPOINTS.TWO_FACTOR_AUTH}`, data);
    }
};
