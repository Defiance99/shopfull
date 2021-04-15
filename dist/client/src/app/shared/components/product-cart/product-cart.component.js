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
exports.ProductCartComponent = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const auth_service_1 = require("../../services/auth.service");
const order_service_1 = require("../../services/order.service");
let ProductCartComponent = class ProductCartComponent {
    constructor(route, router, orderService, authService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.authService = authService;
        this.isLoading = false;
        this.counter = 1;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this.orderSubscription) {
            this.orderSubscription.unsubscribe();
        }
    }
    addToCart(product) {
        product.quantity = this.counter;
        this.orderSubscription = this.orderService.addToCart(product).subscribe(() => showModalMessage('Успешно добавлено'), err => showModalMessage(err.message));
    }
    hideLoader() {
        this.isLoading = true;
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
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ProductCartComponent.prototype, "product", void 0);
ProductCartComponent = __decorate([
    core_1.Component({
        selector: 'app-product-cart',
        templateUrl: './product-cart.component.html',
        styleUrls: ['./product-cart.component.scss']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        order_service_1.OrderService,
        auth_service_1.AuthService])
], ProductCartComponent);
exports.ProductCartComponent = ProductCartComponent;
//# sourceMappingURL=product-cart.component.js.map