import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-users.dto';
import { UserDeviceDto } from './dto/user-device.dto';
import { Device } from './entity/user-device.entity';
import { User } from './entity/users.entity';
export declare class UsersService {
    private userRepository;
    private deviceRepository;
    readonly saltRounds: number;
    constructor(userRepository: Repository<User>, deviceRepository: Repository<Device>);
    findByLogin(login: string): Promise<User | undefined>;
    create(user: CreateUserDto, device: UserDeviceDto): Promise<User>;
    updateRefreshToken(userId: number, device: string, ip: string): Promise<any>;
    createRefreshToken(): Promise<{
        token: any;
        createdAt: number;
        expiredAt: number;
    }>;
    getAll(): Promise<User[]>;
    removeById(id: string): Promise<import("typeorm").DeleteResult>;
    checkRefreshToken(userId: number, refreshToken: string, exp: number): Promise<Device>;
}
