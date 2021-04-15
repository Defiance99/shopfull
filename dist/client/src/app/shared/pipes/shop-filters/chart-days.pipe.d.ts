import { PipeTransform } from '@angular/core';
import { Product } from '../../interfaces';
export declare class ChartDaysPipe implements PipeTransform {
    transform(items: Product[], states: string[]): Product[];
}
