import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/index';
import { AuthService } from '../services/auth.service';
export declare class AuthGuard implements CanActivate, CanActivateChild {
    private authService;
    private router;
    constructor(authService: AuthService, router: Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>;
}
