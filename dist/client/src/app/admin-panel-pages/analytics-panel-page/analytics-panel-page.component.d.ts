import { OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
export declare class AnalyticsPanelPageComponent implements OnInit {
    private authService;
    constructor(authService: AuthService);
    ngOnInit(): void;
}
