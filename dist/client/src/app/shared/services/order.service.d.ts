import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductOrder } from '../interfaces';
import { AuthService } from './auth.service';
export declare class OrderService {
    private authService;
    private http;
    constructor(authService: AuthService, http: HttpClient);
    addToCart(product: Product): Observable<Object>;
    addToCartLocalItems(products: ProductOrder[]): Observable<ProductOrder[]>;
    getLocalitems(): void;
    checkout(): Observable<Object>;
    updateLocalItems(items: ProductOrder[]): void;
    updateMyOrder(items: ProductOrder[]): Observable<ProductOrder[]>;
    getMyCart(): Observable<ProductOrder[]>;
    remove(item: ProductOrder): Observable<Object>;
    removeAll(): Observable<Object>;
}
