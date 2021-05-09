import { AuthService } from './auth.service';
import { SignUpDto } from './dto/sign-up.dto';
import { TokensDto } from './dto/tokens.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(dataSignUp: SignUpDto, req: any): Promise<{
        message: string;
    }>;
    login(req: any): Promise<{
        access_token: string;
        refresh_token: any;
    }>;
    updateTokens(tokensDto: TokensDto, req: any): Promise<{
        access_token: string;
        refresh_token: any;
    }>;
    googleLogin(): void;
    googleLoginCallback(req: any): Promise<"No user from login" | {
        message: string;
        user: any;
    }>;
}
