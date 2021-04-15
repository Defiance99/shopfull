import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { SignInForm, User } from '../interfaces';
export declare class AuthService {
    private http;
    private cookieService;
    private token;
    constructor(http: HttpClient, cookieService: CookieService);
    register(userForm: User): import("rxjs").Observable<Object>;
    login(signInForm: SignInForm): import("rxjs").Observable<any>;
    setToken(token: string | null): void;
    getToken(): string | null;
    logout(): void;
    logoutAllDevice(): import("rxjs").Observable<Object>;
    isAuthenticated(): boolean;
    updateTokens(): import("rxjs").Observable<any>;
}
