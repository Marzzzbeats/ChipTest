import { IsEmail, IsEnum, isNotEmpty, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto{
    @IsString({message: "Le nom doit etre un string"})
    @IsNotEmpty({message: "Le nom est requis"})
    @MinLength(3, {message: "Le nom doit faire au moins 3 caractères"})
    name: string;
    @IsEmail({}, {message: "L'adresse mail est invalide"})
    @IsNotEmpty({message: "L'email est requis"})
    email: string;
    @IsOptional()
    @IsEnum(['admin', 'user'], {message: "Le role doit être user ou admin"})
    role?: 'admin' | 'user';
}