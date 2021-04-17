import { Product } from 'src/product/entity/product.entity';
import { Order } from './order.entity';
export declare class OrderDetails {
    id: number;
    orders: Order;
    products: Product;
    quantity: number;
}
