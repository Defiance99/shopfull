import { OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
export declare class MainLayoutComponent implements OnInit, OnDestroy {
    private productService;
    private authService;
    constructor(productService: ProductService, authService: AuthService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
