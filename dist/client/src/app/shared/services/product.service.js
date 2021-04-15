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
exports.ProductService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
    }
    create(form, images) {
        const fd = new FormData();
        if (images) {
            for (let image of images) {
                fd.append('images', image, image.name);
            }
        }
        fd.append('price', form.price);
        fd.append('name', form.name);
        fd.append('weight', String(form.weight));
        fd.append('currency', form.currency);
        fd.append('description', form.description);
        fd.append('bonuses', JSON.stringify(form.bonuses));
        fd.append('category', JSON.stringify(form.category));
        fd.append('chartDays', JSON.stringify(form.chartDays));
        fd.append('customFields', JSON.stringify(form.customFields));
        return this.http.post('/api/product/uploadMultipleFiles', fd);
    }
    getByFilters(category = '%', day = '%') {
        return this.http.get(`/api/product/getByFilters?category=${category}&day=${day}`);
    }
    getById(id) {
        return this.http.get(`/api/product/getById/${id}`);
    }
    getProducts(limit = 8) {
        return this.http.get(`/api/product/getProducts?limit=${limit}`);
    }
    getAll() {
        this.setPositions(this.http.get('/api/product/getAll'));
    }
    setPositions(products) {
        this.products$ = products;
    }
    getPositions() {
        return this.products$;
    }
};
ProductService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [http_1.HttpClient])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map