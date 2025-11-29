import { IUser } from "@/libs/common/types/user.type";
import { UsersService } from "@/users/users.service";
import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";

@Injectable()
export class SessionSerializer extends PassportSerializer {
    constructor(private readonly userService: UsersService) {
        super();
    }
    
    serializeUser(user: IUser, done: Function) {
        done(null, user.user_id);
    }

    async deserializeUser(userId: string, done: Function) {
        try {
            const user = await this.userService.findById(userId);
         
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    }
}