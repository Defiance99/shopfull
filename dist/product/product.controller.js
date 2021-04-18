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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const platform_express_1 = require("@nestjs/platform-express");
const create_product_dto_1 = require("./dto/create-product.dto");
const product_service_1 = require("./product.service");
const product_validation_pipe_1 = require("./pipes/product-validation.pipe");
const file_upload_utils_1 = require("../utils/file-upload.utils");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async uploadedMultipleFile(createProductDto, req, images) {
        console.log('IMGS LENGTYH:', images.length);
        let catalogImgs = [];
        let previewImg;
        for (let i = 0; i < images.length; i++) {
            if (i == 0)
                previewImg = images[i]['path'];
            else
                catalogImgs.push(images[i]['path']);
        }
        await this.productService.create(catalogImgs, previewImg, createProductDto, req.user.id);
    }
    async getAll() {
        return this.productService.getAll();
    }
    async getProducts(query) {
        return this.productService.getProducts(query.limit);
    }
    async getByFilters(query) {
        return this.productService.findByFilters(query.category, query.day);
    }
    async findImage(imagename, res) {
        res.sendFile(imagename, { root: 'uploads' });
    }
    async getById(id) {
        return this.productService.findById(id);
    }
};
__decorate([
    common_1.Post('uploadMultipleFiles'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.UseInterceptors(platform_express_1.FilesInterceptor('images', 6, {
        storage: multer_1.diskStorage({
            destination: './uploads',
            filename: file_upload_utils_1.editFileName,
            filefilter: file_upload_utils_1.imageFileFilter,
        }),
    })),
    __param(0, common_1.Body(new product_validation_pipe_1.ProductValidationPipe())), __param(1, common_1.Request()),
    __param(2, common_1.UploadedFiles()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "uploadedMultipleFile", null);
__decorate([
    common_1.Get('getAll'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAll", null);
__decorate([
    common_1.Get('getProducts'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getProducts", null);
__decorate([
    common_1.Get('getByFilters'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getByFilters", null);
__decorate([
    common_1.Get('uploads/:imagename'),
    __param(0, common_1.Param('imagename')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findImage", null);
__decorate([
    common_1.Get('getById/:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getById", null);
ProductController = __decorate([
    common_1.Controller('api/product'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map