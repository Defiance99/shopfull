import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class RatingControlComponent implements OnInit, ControlValueAccessor {
    ratingReviewRef: ElementRef;
    stars: number[];
    rating: number;
    private onChange;
    private onTouched;
    constructor();
    ngOnInit(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    countStar(star: number): void;
    addClass(star: number): void;
    removeClass(star: number): void;
}
