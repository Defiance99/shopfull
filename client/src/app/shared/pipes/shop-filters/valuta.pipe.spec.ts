import { Product } from '../../interfaces';
import { ValutaPipe } from './valuta.pipe';

describe('ValutaPipe - filters products by currency', () => {
  let pipe: ValutaPipe;
  let product: Product;
  let items: Product[] = [];

  beforeEach(() => {
    pipe = new ValutaPipe();
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

  it('transforms products when there is a match', () => {
    product.currency = 'EUR';
    items.push(product);
    expect(pipe.transform(items, 'EUR')).toEqual(items);
  });

  it('dont transforms products when there is not a match', () => {
    product.name = 'EUR';
    items.push(product);
    expect(pipe.transform(items, 'RUB')).not.toEqual(items);
  });
});
