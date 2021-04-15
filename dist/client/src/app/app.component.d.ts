import { OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { RoutingService } from './shared/services/routing.service';
export declare class AppComponent implements OnInit, OnDestroy {
    private router;
    private activatedRoute;
    private titleService;
    private routingService;
    private authService;
    authSub: Subscription | undefined;
    constructor(router: Router, activatedRoute: ActivatedRoute, titleService: Title, routingService: RoutingService, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
