import { Product } from '../../interfaces';
import { SearchPipe } from './search.pipe';

describe('SearchPipe - filters products by search input', () => {
  let pipe: SearchPipe;
  let product: Product;
  let items: Product[] = [];

  beforeEach(() => {
    pipe = new SearchPipe();
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
    const pipe = new SearchPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform products when there is a match', () => {
    product.name = 'Test';
    items.push(product);
    expect(pipe.transform(items, 'Test')).toEqual(items);
  });

  it('dont transforms products when there is not a match', () => {
    product.name = 'Test';
    items.push(product);
    expect(pipe.transform(items, 'Test-Test')).not.toEqual(items);
  });

});
