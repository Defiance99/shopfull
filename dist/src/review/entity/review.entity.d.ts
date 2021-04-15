import { User } from 'src/users/entity/users.entity';
export declare class Review {
    id: number;
    theme: string;
    message: string;
    rating: number;
    maxRating: number;
    user: User;
}
