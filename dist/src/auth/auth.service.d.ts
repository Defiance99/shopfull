import { JwtService } from '@nestjs/jwt';
import { UserDeviceDto } from 'src/users/dto/user-device.dto';
import { UsersService } from 'src/users/users.service';
import { SignUpDto } from './dto/sign-up.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUser(login: string, password: string): Promise<any>;
    registerUser(dataUser: SignUpDto, device: UserDeviceDto): Promise<void>;
    login(req: any): Promise<{
        access_token: string;
        refresh_token: any;
    }>;
    googleLogin(req: any): Promise<"No user from login" | {
        message: string;
        user: any;
    }>;
    updateTokens(tokens: any, req: any): Promise<{
        access_token: string;
        refresh_token: any;
    }>;
}
