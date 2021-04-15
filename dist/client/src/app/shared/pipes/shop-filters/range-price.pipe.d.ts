import { PipeTransform } from '@angular/core';
import { Product } from '../../interfaces';
interface Price {
    'range': string;
    'price': string;
}
export declare class RangePricePipe implements PipeTransform {
    transform(items: Product[], value: Price): Product[];
}
export {};
