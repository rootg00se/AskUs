import { useUser } from "@/entities/user"

export const AuthProvier: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useUser();

    return children;
}