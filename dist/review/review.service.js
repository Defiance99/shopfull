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
exports.ReviewService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const review_entity_1 = require("./entity/review.entity");
let ReviewService = class ReviewService {
    constructor(reviewRepository) {
        this.reviewRepository = reviewRepository;
    }
    async getAll() {
        return this.reviewRepository
            .createQueryBuilder('review')
            .leftJoin('review.user', 'user')
            .select('review.theme')
            .addSelect('review.message')
            .addSelect('review.rating')
            .addSelect('review.maxRating')
            .addSelect('user.userName')
            .getMany();
    }
    async create(review, userId) {
        review['user'] = userId;
        return this.reviewRepository.insert(review);
    }
    async getById(userId) {
        return this.reviewRepository
            .createQueryBuilder('review')
            .leftJoin('review.user', 'user')
            .where('user.id = :id', {
            'id': userId
        })
            .getMany();
    }
    async getByLimit(limit) {
        return this.reviewRepository
            .createQueryBuilder('review')
            .leftJoin('review.user', 'user')
            .select('review.theme')
            .addSelect('review.message')
            .addSelect('review.rating')
            .addSelect('review.maxRating')
            .addSelect('user.userName')
            .limit(limit)
            .orderBy('review.id', 'DESC')
            .getMany();
    }
};
ReviewService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(review_entity_1.Review)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReviewService);
exports.ReviewService = ReviewService;
//# sourceMappingURL=review.service.js.map