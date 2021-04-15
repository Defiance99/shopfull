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
exports.TokenInterseptor = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const auth_service_1 = require("../services/auth.service");
let TokenInterseptor = class TokenInterseptor {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    intercept(req, next) {
        if (this.authService.getToken() == null) {
            this.token = '';
        }
        else {
            this.token = this.authService.getToken();
        }
        if (this.authService) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.token}`
                }
            });
        }
        return next.handle(req).pipe(operators_1.catchError((error) => this.handleAuthError(error)));
    }
    handleAuthError(error) {
        if (error.status === 401) {
        }
        return rxjs_1.throwError(error);
    }
};
TokenInterseptor = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
], TokenInterseptor);
exports.TokenInterseptor = TokenInterseptor;
//# sourceMappingURL=token.interseptor.js.map