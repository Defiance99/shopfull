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
exports.Product = void 0;
const order_details_entity_1 = require("../../order/entity/order-details.entity");
const order_entity_1 = require("../../order/entity/order.entity");
const users_entity_1 = require("../../users/entity/users.entity");
const typeorm_1 = require("typeorm");
let Product = class Product {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'tinytext' }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    typeorm_1.Column({ type: 'tinytext' }),
    __metadata("design:type", String)
], Product.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ type: 'smallint' }),
    __metadata("design:type", Number)
], Product.prototype, "weight", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], Product.prototype, "bonuses", void 0);
__decorate([
    typeorm_1.Column({ type: 'tinytext' }),
    __metadata("design:type", String)
], Product.prototype, "currency", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], Product.prototype, "category", void 0);
__decorate([
    typeorm_1.Column('simple-array'),
    __metadata("design:type", Array)
], Product.prototype, "chartDays", void 0);
__decorate([
    typeorm_1.Column({ type: 'text' }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ type: 'json' }),
    __metadata("design:type", Array)
], Product.prototype, "customFields", void 0);
__decorate([
    typeorm_1.Column({ type: 'json', nullable: true }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Product.prototype, "previewImage", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Product.prototype, "userId", void 0);
__decorate([
    typeorm_1.OneToMany(type => order_details_entity_1.OrderDetails, orderDetails => orderDetails.products),
    __metadata("design:type", order_details_entity_1.OrderDetails)
], Product.prototype, "orderDetails", void 0);
Product = __decorate([
    typeorm_1.Entity()
], Product);
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map