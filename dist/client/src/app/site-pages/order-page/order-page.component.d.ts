import { OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ProductOrder } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';
import { OrderService } from 'src/app/shared/services/order.service';
export declare class OrderPageComponent implements OnInit, OnDestroy {
    private authService;
    private orderService;
    dialog: MatDialog;
    positions: ProductOrder[];
    positionsSub: Subscription | undefined;
    orderSub: Subscription | undefined;
    dataSource: any;
    displayedColumns: string[];
    constructor(authService: AuthService, orderService: OrderService, dialog: MatDialog);
    ngOnInit(): void;
    ngOnDestroy(): void;
    openDialog(): void;
    removePosition(element: ProductOrder): void;
    removeAll(): void;
    increment(element: ProductOrder): void;
    decrement(element: ProductOrder): void;
    getElementPrice(element: ProductOrder): string;
    getTotalPrice(): number;
}
