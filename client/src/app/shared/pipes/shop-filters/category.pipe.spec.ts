import { Product } from '../../interfaces';
import { CategoryPipe } from './category.pipe';

describe('CategoryPipe - filters products by categories', () => {
  let pipe: CategoryPipe;
  let product: Product;
  let items: Product[] = [];

  beforeEach(() => {
    pipe = new CategoryPipe();
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
    expect(pipe).toBeTruthy();
  });

  it('transform products when there is a match', () => {
    product.category.push('Обед');
    items.push(product);
    expect(pipe.transform(items, ['Обед'])).toEqual(items);
  });

  it('dont transform products when there is a not match', () => {
    product.category.push('Обед');
    items.push(product);
    expect(pipe.transform(items, ['Завтрак'])).not.toEqual(items);
  });

});
