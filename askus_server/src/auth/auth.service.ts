import { UsersService } from '@/users/users.service';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { hash, verify } from "argon2";
import { LoginDto } from './dto/login.dto';
import { IUser } from '@/libs/common/types/user.type';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService) {}

    async register(userData: RegisterDto) {
        const existingUser = await this.usersService.findByEmail(userData.email);

        if (existingUser) throw new BadRequestException("User with that email already exists");

        const hashedPassword = await hash(userData.password);

        const createdUser = await this.usersService.createUserWithCredentials({
            email: userData.email,
            displayName: userData.displayName,
            password: hashedPassword,
        });

        return createdUser;
    }

    async validateUser(userData: LoginDto): Promise<null | IUser> {
        const user = await this.usersService.findByEmail(userData.email);
        if (!user) return null;

        const isPasswordsMathcing = await verify(user!.password_hash, userData.password);
        if (!isPasswordsMathcing) return null;

        const { password_hash, ...userResult } = user;

        return userResult;
    }
}