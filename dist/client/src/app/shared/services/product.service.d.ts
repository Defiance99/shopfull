import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces';
export declare class ProductService {
    private http;
    private products$;
    constructor(http: HttpClient);
    create(form: Product, images?: File[]): Observable<Object>;
    getByFilters(category?: string, day?: string): Observable<Product[]>;
    getById(id: string): Observable<Product>;
    getProducts(limit?: number): Observable<Product[]>;
    getAll(): void;
    setPositions(products: Observable<Product[]>): void;
    getPositions(): Observable<Product[]>;
}
