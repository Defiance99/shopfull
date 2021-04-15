import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";
export declare class TokenInterseptor implements HttpInterceptor {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    private token;
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private handleAuthError;
}
