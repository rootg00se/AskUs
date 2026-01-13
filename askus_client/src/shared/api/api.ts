import axios from "axios";
import { API_URL } from "../config/constants";

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
});