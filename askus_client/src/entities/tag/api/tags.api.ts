import { $api } from "@/shared/api/api"
import { TAGS_ENDPOINT } from "../lib/constants";
import type { ITagResponse } from "../model/types";

export const tagsApi = {
    baseKey: "tags",
    getAllTags: () => {
        return $api.get<ITagResponse[]>(TAGS_ENDPOINT);
    }
}