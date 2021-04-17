import { User } from "src/users/entity/users.entity";
export declare class Device {
    id: number;
    ip: string;
    browser: string;
    userAgent: string;
    token: string;
    expiredAt: number;
    createdAt: number;
    user: User;
}
