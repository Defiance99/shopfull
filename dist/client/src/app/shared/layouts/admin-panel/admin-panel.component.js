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
exports.AdminPanelComponent = void 0;
const core_1 = require("@angular/core");
const auth_service_1 = require("../../services/auth.service");
const routing_service_1 = require("../../services/routing.service");
let AdminPanelComponent = class AdminPanelComponent {
    constructor(routingService, authService) {
        this.routingService = routingService;
        this.authService = authService;
        this.isAuthPage = false;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.titlePage = this.routingService.getTitle();
        if (this.titlePage == 'Регистрация' || this.titlePage == 'Вход в систему') {
            this.isAuthPage = true;
        }
        else {
            this.isAuthPage = false;
        }
    }
    logout() {
        this.authService.logout();
    }
    logoutAll() {
        this.authService.logoutAllDevice();
    }
};
AdminPanelComponent = __decorate([
    core_1.Component({
        selector: 'app-admin-panel',
        templateUrl: './admin-panel.component.html',
        styleUrls: ['./admin-panel.component.scss']
    }),
    __metadata("design:paramtypes", [routing_service_1.RoutingService,
        auth_service_1.AuthService])
], AdminPanelComponent);
exports.AdminPanelComponent = AdminPanelComponent;
//# sourceMappingURL=admin-panel.component.js.map