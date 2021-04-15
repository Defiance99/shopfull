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
exports.MainLayoutComponent = void 0;
const core_1 = require("@angular/core");
const auth_service_1 = require("../../services/auth.service");
const product_service_1 = require("../../services/product.service");
let MainLayoutComponent = class MainLayoutComponent {
    constructor(productService, authService) {
        this.productService = productService;
        this.authService = authService;
    }
    ngOnInit() {
        this.productService.getAll();
    }
    ngOnDestroy() {
    }
};
MainLayoutComponent = __decorate([
    core_1.Component({
        selector: 'app-main-layout',
        templateUrl: './main-layout.component.html',
        styleUrls: ['./main-layout.component.scss']
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        auth_service_1.AuthService])
], MainLayoutComponent);
exports.MainLayoutComponent = MainLayoutComponent;
//# sourceMappingURL=main-layout.component.js.map