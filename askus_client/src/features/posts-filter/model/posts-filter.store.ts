import { create } from "zustand";

interface IPostsFilterStore {
    query: string;
    tags: string[];
    difficulties: string[];
    setQuery: (query: string) => void;
    setTags: (tags: string[]) => void;
    setDifficulties: (difficulties: string[]) => void;
    toggleTag: (tag: string) => void;
    toggleDifficulty: (difficulty: string) => void;
}

export const usePostsFilterStore = create<IPostsFilterStore>((set) => ({
    query: "",
    tags: [],
    difficulties: [],
    setQuery: (query: string) => set(() => ({ query })),
    setTags: (tags: string[]) => set(() => ({ tags })),
    setDifficulties: (difficulties: string[]) => set(() => ({ difficulties })),
    toggleTag: (tag: string) =>
        set((store) => ({
            tags: store.tags.includes(tag) ? store.tags.filter((t) => t !== tag) : [...store.tags, tag],
        })),
    toggleDifficulty: (difficulty: string) =>
        set((store) => ({
            difficulties: store.difficulties.includes(difficulty)
                ? store.difficulties.filter((d) => d !== difficulty)
                : [...store.difficulties, difficulty],
        })),
}));