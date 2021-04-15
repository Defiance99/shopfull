import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces';
import { ProductService } from 'src/app/shared/services/product.service';
export declare class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
    private productService;
    scheduleRef: ElementRef;
    menuItemsRef: ElementRef;
    weekDays: string[];
    today: number;
    products$: Observable<Product[]> | undefined;
    menuProducts$: Observable<Product[]> | undefined;
    ecoProducts$: Observable<Product[]> | undefined;
    constructor(productService: ProductService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    initMenuItems(menu: any, category?: string, isActiveFirstItem?: Boolean): void;
    openMessageModal(message: string): void;
}
