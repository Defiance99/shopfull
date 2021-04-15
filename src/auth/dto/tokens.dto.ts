import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class TokensDto {
    @IsNotEmpty()
    @IsString()
    access_token: string

    @IsNotEmpty()
    @IsString()
    refresh_token: string
}