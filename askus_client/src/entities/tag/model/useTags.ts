import { useQuery } from "@tanstack/react-query";
import { tagsApi } from "../api/tags.api";

export const useTags = () => {
    const { data, isPending } = useQuery({
        queryKey: [tagsApi.baseKey],
        queryFn: tagsApi.getAllTags,
        select: (data) => data.data,
    });

    return {
        tagsData: data,
        isTagsPending: isPending,
    };
};
