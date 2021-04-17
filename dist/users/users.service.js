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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_device_entity_1 = require("./entity/user-device.entity");
const users_entity_1 = require("./entity/users.entity");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor(userRepository, deviceRepository) {
        this.userRepository = userRepository;
        this.deviceRepository = deviceRepository;
        this.saltRounds = 10;
    }
    async findByLogin(login) {
        const user = await this.userRepository.findOne({ login });
        if (user) {
            return user;
        }
    }
    async create(user, device) {
        let userTable = {};
        userTable = user;
        userTable['devices'] = [device];
        return await this.userRepository.save(userTable);
    }
    async updateRefreshToken(userId, device, ip) {
        let refreshToken = await this.createRefreshToken();
        await this.deviceRepository
            .createQueryBuilder('device')
            .leftJoin('device.user', 'user')
            .where('user.id = :id', {
            'id': userId,
            'userAgent': device,
            'ip': ip
        })
            .update(user_device_entity_1.Device)
            .set({
            'token': refreshToken.token,
            'expiredAt': refreshToken.expiredAt,
            'createdAt': refreshToken.createdAt
        })
            .execute();
        return refreshToken.token;
    }
    async createRefreshToken() {
        let token = uuid_1.v4();
        let today = new Date();
        let createdAt = +(new Date());
        let expiredAt = today.setDate(today.getDate() + 60);
        return { token, createdAt, expiredAt };
    }
    async getAll() {
        return await this.userRepository.find();
    }
    async removeById(id) {
        return await this.userRepository.delete(id);
    }
    async checkRefreshToken(userId, refreshToken, exp) {
        return await this.deviceRepository
            .createQueryBuilder('device')
            .leftJoin('device.user', 'user')
            .where('user.id = :id', {
            'id': userId,
            'token': refreshToken,
            'expiredAt': exp
        })
            .select('device.id')
            .getOne();
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(users_entity_1.User)),
    __param(1, typeorm_1.InjectRepository(user_device_entity_1.Device)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map