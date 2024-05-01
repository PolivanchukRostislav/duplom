import { IsEmail, IsEnum, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";



export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    email: string;

    @IsString() 
    // @IsStrongPassword()
    @IsNotEmpty()
    password: string;

    @IsEnum(['cadet', 'oficer', 'scienceOfficer', 'science', 'admin'], { message: 'Valid role required' })
    position: 'cadet' | 'oficer' | 'scienceOfficer' | 'science' | 'admin';
}