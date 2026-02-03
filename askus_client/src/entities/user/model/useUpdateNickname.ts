import { useMutation } from "@tanstack/react-query";
import { userApi } from "../api/user.api";
import { toast } from "react-toastify";
import { queryClient } from "@/app/providers/query-client";
import type { IUserResponse } from "./types";
import type { IErrorResponse } from "@/shared/types/error-response.type";

export const useUpdateNickname = () => {
    const updateUserNicknameMutation = useMutation({
        mutationKey: [userApi.baseKey, "nickname"],
        mutationFn: userApi.updateNickname,
        onMutate: async (nickname) => {
            await queryClient.cancelQueries({ queryKey: [userApi.baseKey] });

            const previousUser = queryClient.getQueryData([userApi.baseKey, "info"]);

            queryClient.setQueryData([userApi.baseKey, "info"], (oldData: IUserResponse) => ({
                ...oldData,
                nickname,
            }));

            return { previousUser };
        },
        onError: (error: IErrorResponse, _, context) => {
            queryClient.setQueryData([userApi.baseKey, "info"], context?.previousUser);
            console.log(error);
            
            toast.error(error.response.data.message[0]);
        },
        onSuccess: () => {
            toast.success("Nickname updated");
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [userApi.baseKey] });
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            queryClient.invalidateQueries({ queryKey: ["answers"] });
        },
    });

    return {
        isUpdateNicknamePending: updateUserNicknameMutation.isPending,
        updateNicknameFunc: updateUserNicknameMutation.mutate,
        isUpdateNicknameSuccess: updateUserNicknameMutation.isSuccess,
    };
};
