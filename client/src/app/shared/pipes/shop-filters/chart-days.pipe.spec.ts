import { Product } from '../../interfaces';
import { ChartDaysPipe } from './chart-days.pipe';

describe('ChartDaysPipe', () => {
  let pipe: ChartDaysPipe;
  let product: Product;
  let items: Product[] = [];

  beforeEach(() => {
    pipe = new ChartDaysPipe();
    items = [];
    product = {
      'id': '',
      'name': '',
      'price': '',
      'weight': 1,
      'bonuses': [''],
      'currency': '',
      'category': [''],
      'chartDays': [''],
      'description': '',
      'customFields': [{
        'nameCustomField': '',
        'valueCustomField': ''
      }],
      'quantity': 1,
      'previewImage': ''
    }
  });

  it('create an instance', () => {
    const pipe = new ChartDaysPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transforms products filtered by days', () => {
    product.chartDays.push('Среда');
    items.push(product);
    expect(pipe.transform(items, ['Среда'])).toEqual(items);
  });

  it('shouldn`t transforms products filtered by days', () => {
    product.chartDays.push('Вторник');
    items.push(product);
    expect(pipe.transform(items, ['Суббота'])).not.toEqual(items);
  });
});
