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
exports.OrderPageComponent = void 0;
const core_1 = require("@angular/core");
const table_1 = require("@angular/material/table");
const dialog_1 = require("@angular/material/dialog");
const auth_service_1 = require("src/app/shared/services/auth.service");
const order_service_1 = require("src/app/shared/services/order.service");
const dialog_box_accept_component_1 = require("./dialog-box-accept/dialog-box-accept.component");
let OrderPageComponent = class OrderPageComponent {
    constructor(authService, orderService, dialog) {
        this.authService = authService;
        this.orderService = orderService;
        this.dialog = dialog;
        this.displayedColumns = ['id', 'name', 'price', 'orderFuncs'];
    }
    ngOnInit() {
        if (this.authService.isAuthenticated()) {
            this.positionsSub = this.orderService.getMyCart().subscribe((data) => {
                if (data.length > 0) {
                    this.positions = data;
                    this.dataSource = new table_1.MatTableDataSource(this.positions);
                }
            });
            let products = localStorage.getItem('products');
            if (products) {
                this.orderService.addToCartLocalItems(JSON.parse(products)).subscribe(items => {
                    this.positions = this.positions.concat(items);
                    this.dataSource = new table_1.MatTableDataSource(this.positions);
                    localStorage.removeItem('products');
                });
            }
        }
        else {
            let products = localStorage.getItem('products');
            if (products)
                this.positions = JSON.parse(products);
            this.dataSource = new table_1.MatTableDataSource(this.positions);
        }
    }
    ngOnDestroy() {
        if (this.positions && !this.authService.isAuthenticated()) {
            this.orderService.updateLocalItems(this.positions);
        }
        if (this.positions && this.authService.isAuthenticated()) {
            this.orderService.updateMyOrder(this.positions).subscribe();
        }
        if (this.positionsSub) {
            this.positionsSub.unsubscribe();
        }
        if (this.orderSub) {
            this.orderSub.unsubscribe();
        }
    }
    openDialog() {
        this.dialog.open(dialog_box_accept_component_1.DialogBoxAcceptComponent);
    }
    removePosition(element) {
        if (!this.positions)
            return;
        for (let i = 0; i < this.positions.length; i++) {
            if (this.positions[i] == element) {
                this.positions.splice(i, 1);
                this.dataSource.data = this.positions;
                showModalMessage('Успешно удалено');
            }
        }
        if (this.authService.isAuthenticated()) {
            this.orderService.remove(element).subscribe();
        }
    }
    removeAll() {
        if (this.authService.isAuthenticated()) {
            this.orderSub = this.orderService.removeAll().subscribe(res => {
                this.positions = [];
                this.dataSource.data = this.positions;
                showModalMessage('Удалено');
            }, err => showModalMessage(err.error.message));
        }
        else {
            this.positions = [];
            this.dataSource.data = this.positions;
            showModalMessage('Удалено');
        }
    }
    increment(element) {
        element.quantity < 99 ? element.quantity++ : element.quantity = 99;
        this.getElementPrice(element);
    }
    decrement(element) {
        element.quantity > 1 ? element.quantity-- : element.quantity = 1;
        this.getElementPrice(element);
    }
    getElementPrice(element) {
        return String(+element.products.price * element.quantity);
    }
    getTotalPrice() {
        return this.positions.length > 0 ? this.positions.map(item => +this.getElementPrice(item)).reduce((acc, value) => acc + value) : 0;
    }
};
OrderPageComponent = __decorate([
    core_1.Component({
        selector: 'app-order-page',
        templateUrl: './order-page.component.html',
        styleUrls: ['./order-page.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _b : Object, dialog_1.MatDialog])
], OrderPageComponent);
exports.OrderPageComponent = OrderPageComponent;
//# sourceMappingURL=order-page.component.js.map