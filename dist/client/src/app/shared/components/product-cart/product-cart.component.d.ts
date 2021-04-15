import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from '../../interfaces';
import { AuthService } from '../../services/auth.service';
import { OrderService } from '../../services/order.service';
export declare class ProductCartComponent implements OnInit, OnDestroy {
    private route;
    private router;
    private orderService;
    private authService;
    product: Product;
    isLoading: boolean;
    counter: number;
    orderSubscription: Subscription;
    constructor(route: ActivatedRoute, router: Router, orderService: OrderService, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    addToCart(product: Product): void;
    hideLoader(): void;
    decrement(): void;
    increment(): void;
}
