import { useQuery } from "@tanstack/react-query"
import { answersApi } from "../api/answers.api";

export const useUserAnswers = (userId: string) => {
    const { data, isPending } = useQuery({
        queryKey: [answersApi.baseKey, userId],
        queryFn: () => answersApi.getUserAnswers(userId),
        select: data => data.data
    });

    return {
        userAnswersData: data,
        isUserAnswersPending: isPending
    }
}