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
exports.DialogBoxAcceptComponent = void 0;
const core_1 = require("@angular/core");
const order_service_1 = require("src/app/shared/services/order.service");
let DialogBoxAcceptComponent = class DialogBoxAcceptComponent {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ngOnInit() {
    }
    checkout() {
        this.checkoutSub = this.orderService.checkout().subscribe(() => showModalMessage('Оплачено'));
    }
    ngOnDestroy() {
        if (this.checkoutSub)
            this.checkoutSub.unsubscribe();
    }
};
DialogBoxAcceptComponent = __decorate([
    core_1.Component({
        selector: 'app-dialog-box-accept',
        templateUrl: './dialog-box-accept.component.html',
        styleUrls: ['./dialog-box-accept.component.scss']
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof order_service_1.OrderService !== "undefined" && order_service_1.OrderService) === "function" ? _a : Object])
], DialogBoxAcceptComponent);
exports.DialogBoxAcceptComponent = DialogBoxAcceptComponent;
//# sourceMappingURL=dialog-box-accept.component.js.map