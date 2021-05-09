import { User } from 'src/users/entity/users.entity';
import { OrderDetails } from './order-details.entity';
export declare class Order {
    id: number;
    orderPrice: number;
    completed: boolean;
    finishedAt: number;
    user: User;
    ordersDetails: OrderDetails[];
}
