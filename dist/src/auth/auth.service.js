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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const user_device_dto_1 = require("../users/dto/user-device.dto");
const users_service_1 = require("../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(login, password) {
        const user = await this.userService.findByLogin(login);
        if (!user) {
            throw new common_1.HttpException('Login or password is wrong', common_1.HttpStatus.UNAUTHORIZED);
        }
        const resultOfCheckingPasswords = await bcrypt.compareSync(password, user.password);
        if (user && resultOfCheckingPasswords) {
            const { password } = user, result = __rest(user, ["password"]);
            return result;
        }
        else {
            throw new common_1.HttpException('Login or password is wrong', common_1.HttpStatus.UNAUTHORIZED);
        }
    }
    async registerUser(dataUser, device) {
        const user = await this.userService.findByLogin(dataUser.login);
        if (!user) {
            const salt = await bcrypt.genSaltSync(+process.env.SALT_ROUNDS);
            const hash = await bcrypt.hashSync(dataUser.password, salt);
            dataUser.password = hash;
            this.userService.create(dataUser, device);
        }
        else {
            throw new common_1.HttpException('This login already exist', common_1.HttpStatus.CONFLICT);
        }
    }
    async login(req) {
        let dataUser = req.user;
        const user = await this.userService.findByLogin(dataUser.login);
        if (user) {
            let token = await this.userService.updateRefreshToken(user.id, req.headers['user-agent'], req.connection.remoteAddress);
            const payload = { userName: user.userName, id: user.id };
            return {
                access_token: this.jwtService.sign(payload),
                refresh_token: token
            };
        }
    }
    async googleLogin(req) {
        if (req.user) {
            return 'No user from login';
        }
        return {
            message: 'User information from google',
            user: req.user
        };
    }
    async updateTokens(tokens, req) {
        let accessToken = this.jwtService.decode(tokens['access_token']);
        const isAuth = await this.userService.checkRefreshToken(accessToken['id'], tokens['refresh_token'], accessToken['exp']);
        if (isAuth) {
            let token = await this.userService.updateRefreshToken(accessToken['id'], req.headers['user-agent'], req.connection.remoteAddress);
            const payload = { userName: accessToken['userName'], id: accessToken['id'] };
            return {
                access_token: this.jwtService.sign(payload),
                refresh_token: token
            };
        }
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map