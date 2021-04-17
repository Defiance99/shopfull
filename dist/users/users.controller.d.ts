import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getAll(): Promise<import("./entity/users.entity").User[]>;
    removeById(id: string): Promise<import("typeorm").DeleteResult>;
}
