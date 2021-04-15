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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductPageComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const order_service_1 = require("src/app/shared/services/order.service");
const product_service_1 = require("src/app/shared/services/product.service");
let ProductPageComponent = class ProductPageComponent {
    constructor(activateRoute, productService, orderService) {
        this.activateRoute = activateRoute;
        this.productService = productService;
        this.orderService = orderService;
        this.counter = 1;
    }
    ngOnInit() {
        this.routeSubscription = this.activateRoute.params.subscribe(param => {
            this.product$ = this.productService.getById(param.id);
        });
        this.product$.subscribe((product) => {
            this.previewImgSrc = product.previewImage;
            this.products$ = this.productService.getByFilters(product.category[0], product.chartDays[0]);
        });
    }
    ngOnDestroy() {
        if (this.routeSubscription) {
            this.routeSubscription.unsubscribe();
        }
        if (this.orderSubscription) {
            this.orderSubscription.unsubscribe();
        }
    }
    addToCart(product) {
        product.quantity = this.counter;
        this.orderSubscription = this.orderService.addToCart(product).subscribe(() => showModalMessage('Успешно добавлено'), err => showModalMessage(err.message));
    }
    decrement() {
        if (this.counter > 1) {
            this.counter--;
        }
    }
    increment() {
        if (this.counter < 100) {
            this.counter++;
        }
    }
    updatePreviewImg(src) {
        this.previewImgSrc = src;
    }
};
ProductPageComponent = __decorate([
    core_1.Component({
        selector: 'app-product-page',
        templateUrl: './product-page.component.html',
        styleUrls: ['./product-page.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, typeof (_a = typeof product_service_1.ProductService !== "undefined" && product_service_1.ProductService) === "function" ? _a : Object, typeof (_b = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _b : Object])
], ProductPageComponent);
exports.ProductPageComponent = ProductPageComponent;
//# sourceMappingURL=product-page.component.js.map