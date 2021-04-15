import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderService } from 'src/app/shared/services/order.service';
export declare class DialogBoxAcceptComponent implements OnInit, OnDestroy {
    private orderService;
    checkoutSub: Subscription | undefined;
    constructor(orderService: OrderService);
    ngOnInit(): void;
    checkout(): void;
    ngOnDestroy(): void;
}
