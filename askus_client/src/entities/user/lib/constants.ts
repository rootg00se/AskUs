import { API_URL } from "@/shared/config/constants";

export const USER_ENDPOINT = `${API_URL}/users`;

export const USER_ENDPOINTS = {
    GET_INFO: `${USER_ENDPOINT}/info`,
    UPDATE_AVATAR: `${USER_ENDPOINT}/avatar`,
    UPDATE_NICKNAME: `${USER_ENDPOINT}/nickname`
};
