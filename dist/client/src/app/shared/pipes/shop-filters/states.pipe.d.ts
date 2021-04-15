import { PipeTransform } from '@angular/core';
import { Product } from '../../interfaces';
export declare class StatesPipe implements PipeTransform {
    transform(items: Product[], states: string[]): Product[];
}
