"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const router_1 = require("@angular/router");
const auth_service_1 = require("./shared/services/auth.service");
const routing_service_1 = require("./shared/services/routing.service");
let AppComponent = class AppComponent {
    constructor(router, activatedRoute, titleService, routingService, authService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.routingService = routingService;
        this.authService = authService;
    }
    ngOnInit() {
        var _a;
        if (!this.authService.isAuthenticated()) {
            this.authSub = (_a = this.authService.updateTokens()) === null || _a === void 0 ? void 0 : _a.subscribe();
        }
        this.routingService.setTitle();
    }
    ngOnDestroy() {
        if (this.authSub) {
            this.authSub.unsubscribe();
        }
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        platform_browser_1.Title,
        routing_service_1.RoutingService,
        auth_service_1.AuthService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map