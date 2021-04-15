import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';
import { OrderService } from 'src/app/shared/services/order.service';
import { ProductService } from 'src/app/shared/services/product.service';
export declare class ProductPageComponent implements OnInit, OnDestroy {
    private activateRoute;
    private productService;
    private orderService;
    previewImgSrc: string | undefined;
    product$: Observable<Product>;
    products$: Observable<Product[]>;
    counter: number;
    routeSubscription: Subscription;
    orderSubscription: Subscription | undefined;
    constructor(activateRoute: ActivatedRoute, productService: ProductService, orderService: OrderService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addToCart(product: Product): void;
    decrement(): void;
    increment(): void;
    updatePreviewImg(src: string): void;
}
