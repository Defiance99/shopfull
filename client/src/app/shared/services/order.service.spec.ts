import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { OrderService } from './order.service';
import { Message, Order, Product, ProductOrder } from '../interfaces';
import { AuthService } from './auth.service';

describe('OrderService', () => {
  let service: OrderService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let product: Product;
  let productOrder: ProductOrder;
  let productsOrder: ProductOrder[] = [];
  let message: Message = { 'message': '' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrderService, AuthService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.inject(OrderService);
    productsOrder = [];
    productOrder = {
      'products': {
        'id': '',
        'name': '',
        'price': ''
      },
      'quantity': 1
    };
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

    // imitation local storage
    let store: any = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
      .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
      .and.callFake(mockLocalStorage.clear);
    // close
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When user is authenticated', () => {
    let authService: AuthService;

    beforeEach(() => {
      authService = TestBed.inject(AuthService);
      authService.setToken('token');
    });

    it('should return a position when add to cart', () => {
      service.addToCart(product).subscribe((value: ProductOrder | ProductOrder[]) => {
        expect(value).toEqual(productOrder);
      });
      const req = httpMock.expectOne('/api/order/addToCart');
      expect(req.request.method).toEqual('POST');
      req.flush(productOrder);
      httpMock.verify();
    });

    it('should return order items when updating order', () => {
      productsOrder.push(productOrder);
      service.updateMyOrder(productsOrder).subscribe(value => {
        expect(value).toBe(productsOrder);
      });
      const req = httpMock.expectOne('/api/order/updateMyOrder');
      expect(req.request.method).toEqual('POST');
      req.flush(productsOrder);
      httpMock.verify();
    });

    it('should return active order', () => {
      service.getMyCart().subscribe(value => {
        expect(value).toBe(productsOrder);
      });
      const req = httpMock.expectOne('/api/order/myCart');
      expect(req.request.method).toEqual('GET');
      req.flush(productsOrder);
      httpMock.verify();
    });

    it('should return message when remove item of order', () => {
      productOrder.id = '1';
      service.remove(productOrder).subscribe(value => {
        expect(value).toBe(message);
      });
      const req = httpMock.expectOne(`/api/order/product/${productOrder.id}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(message);
      httpMock.verify();
    });

    it('should return message when remove all items of order', () => {
      service.removeAll().subscribe(value => {
        expect(value).toBe(message);
      });
      const req = httpMock.expectOne('/api/order/products');
      expect(req.request.method).toEqual('DELETE');
      req.flush(message);
      httpMock.verify();
    });

    it('should return completed order', () => {
      let order: Order = {'id': '1234'};
      service.checkout().subscribe(result => {
        expect(result).toBe(order)
      });
      const req = httpMock.expectOne('/api/order/checkout');
      expect(req.request.method).toEqual('GET');
      req.flush(order);
      httpMock.verify();
    });
  });

  describe('When user is not authenticated', () => {
    it('should return positions when add to cart', () => {
      productsOrder.push(productOrder);
      service.addToCart(product).subscribe(value => {
        expect(value).toEqual(productsOrder);
      });
    });

    it('should to update positions in local storage', () => {
      productsOrder.push(productOrder);
      localStorage.removeItem('products');
      service.updateLocalItems(productsOrder);

      let items = localStorage.getItem('products');
      if (items == null) fail();
      else expect(JSON.parse(items)).toEqual(productsOrder);
    });
  });
});
