import { usePostsFilterStore } from "@/features/posts-filter";
import { useEffect } from "react";
import qs from "qs";
import { useSearchParams } from "react-router-dom";

export const usePostsFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setTags = usePostsFilterStore((store) => store.setTags);
    const setDifficulties = usePostsFilterStore((store) => store.setDifficulties);
    const setQuery = usePostsFilterStore((store) => store.setQuery);

    const tags = usePostsFilterStore((store) => store.tags);
    const query = usePostsFilterStore((store) => store.query);
    const difficulties = usePostsFilterStore((store) => store.difficulties);

    const queryFilterObject = {
        tags,
        query: query || undefined,
        difficulties,
    };

    useEffect(() => {
        setSearchParams(qs.stringify(queryFilterObject, { arrayFormat: "comma" }));
    }, [tags, query, difficulties]);

    useEffect(() => {
        setTags(searchParams.get("tags")?.split(",") || []);
        setQuery(searchParams.get("query") || "");
        setDifficulties(searchParams.get("difficulties")?.split(",") || []);
    }, []);

    return {
        tagsFilter: tags.join(","),
        difficultiesFilter: difficulties.join(","),
        queryFilter: query,
    };
};
