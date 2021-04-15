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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsPanelPageComponent = void 0;
const core_1 = require("@angular/core");
const auth_service_1 = require("src/app/shared/services/auth.service");
let AnalyticsPanelPageComponent = class AnalyticsPanelPageComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
    }
};
AnalyticsPanelPageComponent = __decorate([
    core_1.Component({
        selector: 'app-analytics-panel-page',
        templateUrl: './analytics-panel-page.component.html',
        styleUrls: ['./analytics-panel-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AnalyticsPanelPageComponent);
exports.AnalyticsPanelPageComponent = AnalyticsPanelPageComponent;
//# sourceMappingURL=analytics-panel-page.component.js.map