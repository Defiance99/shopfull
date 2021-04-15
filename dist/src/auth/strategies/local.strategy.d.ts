import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { User } from 'src/users/entity/users.entity';
declare const LocalStrategy_base: new (...args: any[]) => Strategy;
export declare class LocalStrategy extends LocalStrategy_base {
    private authService;
    constructor(authService: AuthService);
    validate(login: string, password: string): Promise<User>;
}
export {};
