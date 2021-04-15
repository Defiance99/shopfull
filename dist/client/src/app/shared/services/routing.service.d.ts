import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
export declare class RoutingService {
    private router;
    private activatedRoute;
    private titleService;
    titlePage: string | undefined;
    constructor(router: Router, activatedRoute: ActivatedRoute, titleService: Title);
    setTitle(): void;
    getChild(activatedRoute: ActivatedRoute): any;
    getTitle(): string;
}
