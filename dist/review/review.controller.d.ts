import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private reviewService;
    constructor(reviewService: ReviewService);
    create(createReviewDto: CreateReviewDto, req: any): Promise<import("typeorm").InsertResult>;
    remove(): void;
    update(): void;
    getById(req: any): Promise<import("./entity/review.entity").Review[]>;
    getAll(): Promise<import("./entity/review.entity").Review[]>;
    getByLimit(query: any): Promise<import("./entity/review.entity").Review[]>;
}
