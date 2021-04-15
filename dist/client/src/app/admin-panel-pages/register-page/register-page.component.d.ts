import { DoCheck, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/shared/services/user.service';
export declare class RegisterPageComponent implements OnInit, DoCheck, OnDestroy {
    private userService;
    private router;
    signUpForm: FormGroup;
    hide: boolean;
    authSub: Subscription | undefined;
    constructor(userService: UserService, router: Router);
    ngOnInit(): void;
    ngDoCheck(): void;
    ngOnDestroy(): void;
    onSubmit(): void;
}
