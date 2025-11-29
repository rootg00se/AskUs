import { RegisterDto } from "@/auth/dto/register.dto";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@ValidatorConstraint({ name: "IsPasswordMatching", async: false })
export class IsPasswordsMatchingConstraint implements ValidatorConstraintInterface {
    public validate(passwordRepeat: string, validationArguments?: ValidationArguments) {
        const obj = validationArguments?.object as RegisterDto;
        return obj.password === passwordRepeat;
    }

    defaultMessage(_?: ValidationArguments): string {
        return "Passwords not matching";
    }
}