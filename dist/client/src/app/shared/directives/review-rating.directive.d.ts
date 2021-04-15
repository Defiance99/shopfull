import { ElementRef } from '@angular/core';
export declare class ReviewRatingDirective {
    private element;
    constructor(element: ElementRef);
    isHovered: boolean;
    onMouseEnter(event: any): void;
    onMouseLeave(): void;
}
