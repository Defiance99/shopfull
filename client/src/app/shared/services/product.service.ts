import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { Product } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    catalogProductsCache = new Map();
    filteredProductsCache = new Map();
    singleProductsCache = new Map();

    constructor(private http: HttpClient) {

    }

    create(form: Product, images?: File[]): Observable<Product> {
        const fd = new FormData();

        if (images) {
            for (let image of images) {
                fd.append('images', image, image.name);
            }
        }
        fd.append('price', form.price);
        fd.append('name', form.name);
        fd.append('weight', String(form.weight));
        fd.append('currency', form.currency);
        fd.append('description', form.description);
        fd.append('bonuses', JSON.stringify(form.bonuses));
        fd.append('category', JSON.stringify(form.category));
        fd.append('chartDays', JSON.stringify(form.chartDays));
        fd.append('customFields', JSON.stringify(form.customFields));
        
        return this.http.post<Product>('/api/product/uploadMultipleFiles', fd);
    }

    getByFilters(category: string = '%', day: string = '%'): Observable<Product[]> {
        const url = `/api/product/getByFilters?category=${category}&day=${day}`;
        return this.toCache(url, this.filteredProductsCache);
    }

    getById(id: string): Observable<Product> {
        const url = `/api/product/getById/${id}`;
        const productsFromCache = this.singleProductsCache.get(url);
        if (productsFromCache) {
            return of(productsFromCache)
        }
        const response = this.http.get<Product>(url);
        response.subscribe(position => {
            this.singleProductsCache.set(url, position);
        });
        return response;
    }

    getProducts(limit: number = 8): Observable<Product[]> {
        return this.http.get<Product[]>(`/api/product/getProducts?limit=${limit}`);
    }

    getAll(): Observable<Product[]> {
        const url = '/api/product/getAll';
        return this.toCache(url, this.catalogProductsCache);
    }

    toCache(url: string, cache: any): Observable<Product[]> {
        const productsFromCache = cache.get(url);
        if (productsFromCache) {
            return of(productsFromCache)
        }
        const response = this.http.get<Product[]>(url);
        response.subscribe(position => {
            cache.set(url, position);
        });
        return response;
    }

}