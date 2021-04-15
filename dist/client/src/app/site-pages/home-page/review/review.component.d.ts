import { OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Review } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ReviewService } from 'src/app/shared/services/review.service';
import { SwiperOptions } from 'swiper/core';
export declare class ReviewComponent implements OnInit, OnDestroy {
    private reviewService;
    private authService;
    reviews$: Observable<Review[]> | undefined;
    isAuthenticated: boolean;
    reviewForm: FormGroup;
    rating: FormControl;
    reviewSubscription: Subscription | undefined;
    config: SwiperOptions;
    constructor(reviewService: ReviewService, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getReviews(limit: number): void;
    openReviewWindow(): void;
    openMessageModal(message: string): void;
    onSubmit(): void;
}
