import { ProductOrderDto } from './dto/product-order.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private orderService;
    constructor(orderService: OrderService);
    addToCart(productDto: any, req: any): Promise<any>;
    addToCartLocalItems(productsOrderDto: ProductOrderDto[], req: any): Promise<(ProductOrderDto & import("./entity/order.entity").Order)[]>;
    updateMyOrder(productOrderDto: ProductOrderDto[], req: any): Promise<(ProductOrderDto & import("./entity/order.entity").Order)[]>;
    checkout(req: any): Promise<import("typeorm").UpdateResult>;
    getMyCart(req: any): Promise<import("./entity/order.entity").Order[]>;
    removeProduct(params: any): Promise<import("typeorm").DeleteResult>;
    removeAll(req: any): Promise<import("./entity/order.entity").Order[]>;
}
