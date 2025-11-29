import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { auth_method } from "@prisma/generated";

@Injectable()
export class UsersService {
    constructor(private readonly prismaService: PrismaService) {}

    async findByEmail(email: string) {
        return await this.prismaService.users.findUnique({ where: { email } });
    }

    async findById(userId: string) {
        return await this.prismaService.users.findUnique({ where: { user_id: userId }, omit: { password_hash: true } });
    }

    async createUserWithCredentials(userData: CreateUserDto) {
        return await this.prismaService.users.create({
            data: {
                email: userData.email,
                display_name: userData.displayName,
                password_hash: userData.password,
                method: auth_method.credentials
            },
            omit: {
                password_hash: true
            }
        });
    }
}
