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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const validation_pipe_1 = require("../common/validation.pipe");
const auth_service_1 = require("./auth.service");
const sign_up_dto_1 = require("./dto/sign-up.dto");
const tokens_dto_1 = require("./dto/tokens.dto");
const google_auth_guard_1 = require("./guards/google-auth.guard");
const local_auth_guard_1 = require("./guards/local-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async signUp(dataSignUp, req) {
        let ip = req.connection.remoteAddress;
        let browser = req.headers['sec-ch-ua'];
        let userAgent = req.headers['user-agent'];
        let device = { ip, browser, userAgent };
        return this.authService.registerUser(dataSignUp, device);
    }
    async login(req) {
        return this.authService.login(req);
    }
    async updateTokens(tokensDto, req) {
        return this.authService.updateTokens(tokensDto, req);
    }
    googleLogin() {
    }
    googleLoginCallback(req) {
        return this.authService.googleLogin(req.user);
    }
};
__decorate([
    common_1.Post('signUp'),
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    __param(0, common_1.Body(new validation_pipe_1.ValidationPipe())), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_dto_1.SignUpDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signUp", null);
__decorate([
    common_1.Post('signIn'),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    common_1.Post('updateTokens'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    __param(0, common_1.Body()), __param(1, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tokens_dto_1.TokensDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateTokens", null);
__decorate([
    common_1.Get('google'),
    common_1.UseGuards(google_auth_guard_1.GoogleAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleLogin", null);
__decorate([
    common_1.Get('google/redirect'),
    common_1.UseGuards(google_auth_guard_1.GoogleAuthGuard),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "googleLoginCallback", null);
AuthController = __decorate([
    common_1.Controller('api/auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map