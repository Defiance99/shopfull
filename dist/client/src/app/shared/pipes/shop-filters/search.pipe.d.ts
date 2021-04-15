import { PipeTransform } from '@angular/core';
import { Product } from '../../interfaces';
export declare class SearchPipe implements PipeTransform {
    transform(items: Product[], value: string): Product[];
}
