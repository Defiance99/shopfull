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
exports.AuthService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const ngx_cookie_service_1 = require("ngx-cookie-service");
const operators_1 = require("rxjs/operators");
let AuthService = class AuthService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.token = null;
    }
    register(userForm) {
        return this.http.post('/api/auth/signUp', userForm);
    }
    login(signInForm) {
        return this.http.post('/api/auth/signIn', signInForm)
            .pipe(operators_1.tap((tokens) => {
            localStorage.setItem('access_token', tokens['access_token']);
            localStorage.setItem('refresh_token', tokens['refresh_token']);
            this.setToken(tokens['access_token']);
        }));
    }
    setToken(token) {
        this.token = token;
    }
    getToken() {
        return this.token;
    }
    logout() {
        this.setToken(null);
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
    }
    logoutAllDevice() {
        return this.http.get('/api/auth/logoutAllDevice');
    }
    isAuthenticated() {
        return !!this.getToken();
    }
    updateTokens() {
        let tokens = {
            'access_token': localStorage.getItem('access_token'),
            'refresh_token': localStorage.getItem('refresh_token')
        };
        if (tokens['refresh_token'] == '')
            return;
        return this.http.post('/api/auth/updateTokens', tokens)
            .pipe(operators_1.tap((tokens) => {
            localStorage.setItem('access_token', tokens['access_token']);
            localStorage.setItem('refresh_token', tokens['refresh_token']);
            this.setToken(tokens['access_token']);
        }));
    }
};
AuthService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient,
        ngx_cookie_service_1.CookieService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map