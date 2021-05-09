import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces';

import { ProductService } from './product.service';
import { of } from 'rxjs';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let product: Product;
  let arrProducts: Product[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    service = TestBed.inject(ProductService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    arrProducts = [];
    product = {
      'id': '',
      'name': '',
      'price': '',
      'weight': 1,
      'bonuses': [''],
      'currency': '',
      'category': [''],
      'chartDays': [''],
      'description': '',
      'customFields': [{
        'nameCustomField': '',
        'valueCustomField': ''
      }],
      'quantity': 1,
      'previewImage': ''
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return created product', () => {
    service.create(product).subscribe(value => {
      expect(value).toBe(product);
    });
    const req = httpMock.expectOne('/api/product/uploadMultipleFiles');
    expect(req.request.method).toEqual('POST');
    req.flush(product);
    httpMock.verify();
  });

  it('should return product by id', () => {
    let id = '1';
    service.getById(id).subscribe(value => {
      expect(value).toEqual(product);
    });
    const req = httpMock.expectOne(`/api/product/getById/${id}`);
    expect(req.request.method).toEqual('GET');
    req.flush(product);
    httpMock.verify();
  });

  it('should return limit products', () => {
    let limit = 10;
    service.getProducts(limit).subscribe(value => {
      expect(value).toEqual(arrProducts);
    });
    const req = httpMock.expectOne(`/api/product/getProducts?limit=${limit}`);
    expect(req.request.method).toEqual('GET');
    req.flush(arrProducts);
    httpMock.verify();
  });
});
