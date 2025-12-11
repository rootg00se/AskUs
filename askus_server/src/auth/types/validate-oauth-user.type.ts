import { provider_type } from "@prisma/generated"

export type ValidateOAuthUserType = {
    email: string, 
    displayName: string,
    accessToken: string, 
    refreshToken: string,
    providerType: provider_type,
    profileId: string
}