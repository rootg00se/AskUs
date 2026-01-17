import axios from "axios";
import { API_URL } from "../config/constants";

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

$api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 403) {
            return Promise.resolve({ data: null });
        }
        return Promise.reject(error);
    },
);
