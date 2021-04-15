import { PipeTransform } from '@angular/core';
import { Product } from '../../interfaces';
export declare class ValutaPipe implements PipeTransform {
    transform(items: Product[], value: string): Product[];
}
