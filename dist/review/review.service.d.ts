import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './entity/review.entity';
export declare class ReviewService {
    private readonly reviewRepository;
    constructor(reviewRepository: Repository<Review>);
    getAll(): Promise<Review[]>;
    create(review: CreateReviewDto, userId: number): Promise<import("typeorm").InsertResult>;
    getById(userId: number): Promise<Review[]>;
    getByLimit(limit: number): Promise<Review[]>;
}
