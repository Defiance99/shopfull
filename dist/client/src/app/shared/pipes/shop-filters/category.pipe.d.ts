import { PipeTransform } from '@angular/core';
import { Product } from '../../interfaces';
export declare class CategoryPipe implements PipeTransform {
    transform(items: Product[], states: string[]): Product[];
}
