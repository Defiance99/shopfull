import { Device } from "src/users/entity/user-device.entity";
import { Review } from "src/review/entity/review.entity";
import { Order } from "src/order/entity/order.entity";
export declare class User {
    id: number;
    userName: string;
    email: string;
    login: string;
    password?: string;
    devices: Device[];
    reviews: Review[];
    orders: Order[];
}
