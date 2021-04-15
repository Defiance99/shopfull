import { DoCheck, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RoutingService } from '../../services/routing.service';
export declare class AdminPanelComponent implements OnInit, DoCheck {
    private routingService;
    private authService;
    titlePage: string | undefined;
    isAuthPage: boolean;
    constructor(routingService: RoutingService, authService: AuthService);
    ngOnInit(): void;
    ngDoCheck(): void;
    logout(): void;
    logoutAll(): void;
}
