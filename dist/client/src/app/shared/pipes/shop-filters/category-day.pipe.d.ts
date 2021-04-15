import { PipeTransform } from '@angular/core';
import { Product } from '../../interfaces';
interface CategoryDay {
    'category': string;
    'day': string;
    'limit': number;
}
export declare class CategoryDayPipe implements PipeTransform {
    transform(items: Product[], states: CategoryDay): Product[];
}
export {};
