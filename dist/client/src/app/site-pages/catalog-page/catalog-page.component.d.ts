import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/services/product.service';
export declare class CatalogPageComponent implements OnInit, OnDestroy, AfterViewInit {
    private productService;
    private route;
    querySubscription: Subscription | undefined;
    products$: Observable<Product[]>;
    maxPrice: {
        range: string;
        price: string;
    };
    minPrice: {
        range: string;
        price: string;
    };
    price: string;
    searchStr: string;
    state: string[];
    categories: string[];
    chartDays: string[];
    currency: string;
    opened: boolean;
    constructor(productService: ProductService, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    clear(): void;
}
