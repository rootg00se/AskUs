import { useMutation } from "@tanstack/react-query";
import { userApi } from "../api/user.api";
import { toast } from "react-toastify";
import { queryClient } from "@/app/providers/query-client";
import type { IErrorResponse } from "@/shared/types/error-response.type";

export const useUpdateAvatar = () => {
    const updateUserAvatarMutation = useMutation({
        mutationKey: [userApi.baseKey, "avatar"],
        mutationFn: userApi.updateAvatar,
        onError: (error: IErrorResponse) => {
            toast.error(error.response.data.message);
        },
        onSuccess: () => {
            toast.success("Avatar updated");
        },
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: [userApi.baseKey] });
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            queryClient.invalidateQueries({ queryKey: ["answers"] });
        },
    });

    return {
        isUpdateAvatarPending: updateUserAvatarMutation.isPending,
        updateAvatarFunc: updateUserAvatarMutation.mutate,
        isUpdateAvatarSuccess: updateUserAvatarMutation.isSuccess,
    };
};
