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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogPageComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const product_service_1 = require("src/app/shared/services/product.service");
let CatalogPageComponent = class CatalogPageComponent {
    constructor(productService, route) {
        this.productService = productService;
        this.route = route;
        this.maxPrice = {
            'range': 'max',
            'price': ''
        };
        this.minPrice = {
            'range': 'min',
            'price': '',
        };
        this.price = '';
        this.searchStr = '';
        this.state = [];
        this.categories = [];
        this.chartDays = [];
        this.currency = '';
        this.opened = true;
    }
    ngOnInit() {
        this.products$ = this.productService.getPositions();
        this.querySubscription = this.route.queryParams.subscribe(queryParam => {
            if (queryParam['category'])
                this.categories = [queryParam['category']];
            if (queryParam['chartDays'])
                this.chartDays = [queryParam['chartDays']];
        });
    }
    ngOnDestroy() {
        if (this.querySubscription) {
            this.querySubscription.unsubscribe();
        }
    }
    ngAfterViewInit() {
    }
    clear() {
        this.price = '';
        this.searchStr = '';
        this.state = [];
        this.categories = [];
        this.chartDays = [];
        this.currency = '';
        this.maxPrice.price = '';
        this.minPrice.price = '';
    }
};
CatalogPageComponent = __decorate([
    core_1.Component({
        selector: 'app-catalog-page',
        templateUrl: './catalog-page.component.html',
        styleUrls: ['./catalog-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object, router_1.ActivatedRoute])
], CatalogPageComponent);
exports.CatalogPageComponent = CatalogPageComponent;
//# sourceMappingURL=catalog-page.component.js.map