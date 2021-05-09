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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("../product/entity/product.entity");
const typeorm_2 = require("typeorm");
const order_details_entity_1 = require("./entity/order-details.entity");
const order_entity_1 = require("./entity/order.entity");
let OrderService = class OrderService {
    constructor(orderRepository, orderDetailsRepositoty) {
        this.orderRepository = orderRepository;
        this.orderDetailsRepositoty = orderDetailsRepositoty;
    }
    async addToCart(product, userId, quantity = 1) {
        let order = {};
        let orderDetails = {
            'products': product.id,
            'quantity': quantity,
        };
        order['ordersDetails'] = [orderDetails];
        order['user'] = userId;
        let currentOrder = await this.findCurrentOrder(userId);
        return currentOrder ? this.updateOrder(orderDetails, currentOrder) : this.createOrder(order);
    }
    async addToCartLocalItems(products, userId) {
        let currentOrder = await this.findCurrentOrder(userId);
        for (let product of products)
            product['orders'] = currentOrder;
        return this.orderDetailsRepositoty.save(products);
    }
    async findCurrentOrder(userId) {
        return this.orderRepository
            .createQueryBuilder('order')
            .leftJoin('order.user', 'user')
            .where('user.id = :id', {
            'id': userId
        })
            .where({
            'completed': false
        })
            .select('order.id')
            .getOne();
    }
    async createOrder(order) {
        return this.orderRepository.save(order);
    }
    async updateOrder(orderDetails, currentOrder) {
        orderDetails['orders'] = currentOrder;
        return this.orderDetailsRepositoty.save(orderDetails);
    }
    async updateOrderProducts(products, userId) {
        let currentOrder = await this.findCurrentOrder(userId);
        for (let product of products)
            product['orders'] = currentOrder;
        console.log(products);
        return this.orderDetailsRepositoty.save(products);
    }
    async checkout(userId) {
        let date = +(new Date());
        return this.orderRepository
            .createQueryBuilder('order')
            .leftJoin('order.user', 'user')
            .where('user.id = :id', {
            'id': userId
        })
            .where({
            'completed': false
        })
            .update(order_entity_1.Order)
            .set({
            'completed': true,
            'finishedAt': date
        })
            .execute();
    }
    async getMyCart(userId) {
        let currentOrder = await this.findCurrentOrder(userId);
        return this.orderDetailsRepositoty
            .createQueryBuilder('orderDetails')
            .leftJoin('orderDetails.orders', 'order')
            .leftJoin('orderDetails.products', 'product')
            .where('order.id = :id', {
            'completed': false,
            'id': currentOrder.id
        })
            .select('product.id')
            .addSelect('product.name')
            .addSelect('product.price')
            .addSelect('product.currency')
            .addSelect('orderDetails.id')
            .addSelect('orderDetails.quantity')
            .getMany();
    }
    async removeProduct(orderDetailsId) {
        return this.orderDetailsRepositoty
            .createQueryBuilder('orderDetails')
            .delete()
            .where({
            'id': orderDetailsId
        })
            .execute();
    }
    async removeAll(userId) {
        let currentOrder = await this.findCurrentOrder(userId);
        return this.orderDetailsRepositoty
            .createQueryBuilder('orderDetails')
            .leftJoin('orderDetails.orders', 'order')
            .where('order.id = :id', {
            'id': currentOrder.id
        })
            .getMany()
            .then(items => {
            return this.orderDetailsRepositoty.remove(items);
        });
    }
};
OrderService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(order_entity_1.Order)),
    __param(1, typeorm_1.InjectRepository(order_details_entity_1.OrderDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map