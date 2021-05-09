import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ReviewService } from './review.service';
import { Review } from '../interfaces';

describe('ReviewService', () => {
  let service: ReviewService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let review: Review = {
    'theme': '',
    'message': '',
    'rating': 1,
    'maxRating': 5,
    'user': {
      'userName': ''
    }
  };
  let arrReview: Review[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ReviewService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(ReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return created review', () => {
    service.create(review).subscribe(value => {
      expect(value).toBe(review);
    });
    const req = httpMock.expectOne('/api/review/create');
    expect(req.request.method).toEqual('POST');
    req.flush(review);
    httpMock.verify();
  });

  it('should return all reviews', () => {
    service.getAll().subscribe(value => {
      expect(value).toBe(arrReview);
    });
    const req = httpMock.expectOne('/api/review/getAll');
    expect(req.request.method).toEqual('GET');
    req.flush(arrReview);
    httpMock.verify();
  });

  it('should return limit reviews', () => {
    let limit = 8;
    service.getByLimit(limit).subscribe(value => {
      expect(value).toBe(arrReview);
    });
    const req = httpMock.expectOne(`/api/review/getByLimit?limit=${limit}`);
    expect(req.request.method).toEqual('GET');
    req.flush(arrReview);
    httpMock.verify();
  });
});
