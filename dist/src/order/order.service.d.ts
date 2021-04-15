import { Product } from 'src/product/entity/product.entity';
import { Repository } from 'typeorm';
import { ProductOrderDto } from './dto/product-order.dto';
import { Order } from './entity/order.entity';
export declare class OrderService {
    private orderRepository;
    private orderDetailsRepositoty;
    constructor(orderRepository: Repository<Order>, orderDetailsRepositoty: Repository<Order>);
    addToCart(product: Product, userId: number, quantity?: number): Promise<any>;
    addToCartLocalItems(products: ProductOrderDto[], userId: number): Promise<(ProductOrderDto & Order)[]>;
    findCurrentOrder(userId: number): Promise<Order>;
    createOrder(order: any): Promise<any>;
    updateOrder(orderDetails: any, currentOrder: any): Promise<any>;
    updateOrderProducts(products: ProductOrderDto[], userId: any): Promise<(ProductOrderDto & Order)[]>;
    checkout(userId: number): Promise<import("typeorm").UpdateResult>;
    getMyCart(userId: number): Promise<Order[]>;
    removeProduct(orderDetailsId: number): Promise<import("typeorm").DeleteResult>;
    removeAll(userId: number): Promise<Order[]>;
}
