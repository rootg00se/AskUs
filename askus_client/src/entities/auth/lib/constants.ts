import { API_URL } from "@/shared/config/constants";

const AUTH_URL = `${API_URL}/auth`

export const AUTH_ENDPOINTS = {
    SIGN_UP: `${AUTH_URL}/register`,
    SIGN_IN: `${AUTH_URL}/login`,
    RESET_PASSWORD: `${AUTH_URL}/password/reset`,
    NEW_PASSWORD: `${AUTH_URL}/password/new`,
    TWO_FACTOR_AUTH: `${AUTH_URL}/2fa/verify`,
    LOGOUT: `${AUTH_URL}/logout`
}