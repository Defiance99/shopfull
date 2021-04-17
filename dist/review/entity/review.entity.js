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
exports.Review = void 0;
const users_entity_1 = require("../../users/entity/users.entity");
const typeorm_1 = require("typeorm");
let Review = class Review {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Review.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Review.prototype, "theme", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Review.prototype, "message", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    typeorm_1.Column({ default: 5 }),
    __metadata("design:type", Number)
], Review.prototype, "maxRating", void 0);
__decorate([
    typeorm_1.ManyToOne(type => users_entity_1.User, user => user.reviews),
    __metadata("design:type", users_entity_1.User)
], Review.prototype, "user", void 0);
Review = __decorate([
    typeorm_1.Entity()
], Review);
exports.Review = Review;
//# sourceMappingURL=review.entity.js.map