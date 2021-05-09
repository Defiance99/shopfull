import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CreateReview, Review } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  reviewsCache = new Map();

  constructor(
    private http: HttpClient
  ) { }

  create(review: CreateReview): Observable<Review> {
    return this.http.post<Review>('/api/review/create', review);
  }

  getAll(): Observable<Review[]> {
    const url = '/api/review/getAll';
    const productsFromCache = this.reviewsCache.get(url);
    console.log(this.reviewsCache);
    if (productsFromCache) {
        return of(productsFromCache);
    }
    const response = this.http.get<Review[]>(url);
    response.subscribe(reviews => {
        this.reviewsCache.set(url, reviews);
    });
    return response;
  }

  getByLimit(limit: number = 6): Observable<Review[]> {
    return this.http.get<Review[]>(`/api/review/getByLimit?limit=${limit}`);
  }
}
