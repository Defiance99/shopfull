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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const product_entity_1 = require("./entity/product.entity");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(images, previewImg = 'uploads\\bfdde66d388696e4d18dfb42d4d795a4-no_image.jpg', productDto, userId) {
        productDto['images'] = images;
        productDto['previewImage'] = previewImg;
        productDto['userId'] = userId;
        console.log(productDto);
        return await this.productRepository.save(productDto);
    }
    async getAll() {
        return this.productRepository.find();
    }
    async getProducts(limit) {
        return await this.productRepository
            .createQueryBuilder('product')
            .orderBy('product.id', 'DESC')
            .limit(limit)
            .getMany();
    }
    async findByFilters(category, day) {
        return await this.productRepository
            .createQueryBuilder('product')
            .where({
            'chartDays': typeorm_2.Like(`%${day}%`),
            'category': typeorm_2.Like(`%${category}%`),
        })
            .select('product.id')
            .addSelect('product.name')
            .addSelect('product.price')
            .addSelect('product.currency')
            .addSelect('product.weight')
            .addSelect('product.bonuses')
            .addSelect('product.previewImage')
            .orderBy('product.id', 'DESC')
            .limit(4)
            .getMany();
    }
    async findById(id) {
        return await this.productRepository
            .createQueryBuilder('product')
            .where({
            'id': id
        })
            .getOne();
    }
};
ProductService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map