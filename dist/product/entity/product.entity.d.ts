import { OrderDetails } from "src/order/entity/order-details.entity";
export declare class Product {
    id: number;
    name: string;
    price: string;
    weight: number;
    bonuses: string[];
    currency: string;
    category: string[];
    chartDays: string[];
    description: string;
    customFields: object[];
    images: object[];
    previewImage: string;
    userId: number;
    orderDetails: OrderDetails;
}
