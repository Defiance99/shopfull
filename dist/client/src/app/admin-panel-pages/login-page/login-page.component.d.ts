import { OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';
export declare class LoginPageComponent implements OnInit, OnDestroy {
    private authService;
    private userService;
    private router;
    private route;
    signInForm: FormGroup;
    authSub: Subscription;
    constructor(authService: AuthService, userService: UserService, router: Router, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    onSubmit(): void;
}
