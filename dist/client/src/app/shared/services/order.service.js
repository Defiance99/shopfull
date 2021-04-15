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
exports.OrderService = void 0;
const http_1 = require("@angular/common/http");
const core_1 = require("@angular/core");
const rxjs_1 = require("rxjs");
const auth_service_1 = require("./auth.service");
let OrderService = class OrderService {
    constructor(authService, http) {
        this.authService = authService;
        this.http = http;
    }
    addToCart(product) {
        if (this.authService.isAuthenticated()) {
            return this.http.post('/api/order/addToCart', product);
        }
        else {
            let productsString = localStorage.getItem('products');
            let products = [];
            let productsOrder;
            if (productsString)
                products = JSON.parse(productsString);
            productsOrder = {
                'products': {
                    'id': product.id,
                    'name': product.name,
                    'price': product.price
                },
                'quantity': product.quantity
            };
            products = products.concat([productsOrder]);
            localStorage.setItem('products', JSON.stringify(products));
            return rxjs_1.of(true);
        }
    }
    addToCartLocalItems(products) {
        return this.http.post('/api/order/updateMyOrder', products);
    }
    getLocalitems() {
    }
    checkout() {
        return this.http.get('/api/order/checkout');
    }
    updateLocalItems(items) {
        localStorage.setItem('products', JSON.stringify(items));
    }
    updateMyOrder(items) {
        return this.http.post('/api/order/updateMyOrder', items);
    }
    getMyCart() {
        return this.http.get('/api/order/myCart');
    }
    remove(item) {
        return this.http.delete(`/api/order/product/${item.id}`);
    }
    removeAll() {
        return this.http.delete('/api/order/products');
    }
};
OrderService = __decorate([
    core_1.Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        http_1.HttpClient])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map