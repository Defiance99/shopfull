import { AfterViewChecked, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';
export declare class CreateProductPageComponent implements OnInit, AfterViewChecked {
    private productService;
    inputRef: ElementRef;
    imagesPreview: any;
    images: File[] | undefined;
    productForm: FormGroup;
    nameProduct: string;
    isHit: boolean;
    isDiscount: boolean;
    isNew: boolean;
    constructor(productService: ProductService);
    ngAfterViewChecked(): void;
    ngOnInit(): void;
    get formData(): FormArray;
    onSubmit(): void;
    showMessage(message: string): void;
    showBonus(bonus: string): void;
    triggerClick(): void;
    onFileUpload(event: any): void;
    addCustomField(): void;
    removeCustomField(): void;
}
