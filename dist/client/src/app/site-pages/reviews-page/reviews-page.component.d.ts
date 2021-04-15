import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from 'src/app/shared/interfaces';
import { ReviewService } from 'src/app/shared/services/review.service';
export declare class ReviewsPageComponent implements OnInit {
    private reviewService;
    reviews$: Observable<Review[]>;
    constructor(reviewService: ReviewService);
    ngOnInit(): void;
}
