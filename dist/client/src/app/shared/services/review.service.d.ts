import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateReview, Review } from '../interfaces';
export declare class ReviewService {
    private http;
    constructor(http: HttpClient);
    create(review: CreateReview): Observable<Review>;
    getAll(): Observable<Review[]>;
    getByLimit(limit: number): Observable<Review[]>;
}
