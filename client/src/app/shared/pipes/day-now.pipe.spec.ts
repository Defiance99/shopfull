import { DayNowPipe } from './day-now.pipe';

describe('DayNowPipe - transforms number type of day to string type', () => {
  let pipe: DayNowPipe;

  beforeEach(() => {
    pipe = new DayNowPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 0 to "Воскресенье" ', () => {
    expect(pipe.transform(0)).toEqual('Воскресенье');
  });
  it('transforms 1 to "Понедельник" ', () => {
    expect(pipe.transform(1)).toEqual('Понедельник');
  });
  it('transforms 2 to "Вторник" ', () => {
    expect(pipe.transform(2)).toEqual('Вторник');
  });
  it('transforms 3 to "Среда" ', () => {
    expect(pipe.transform(3)).toEqual('Среда');
  });
  it('transforms 4 to "Четверг" ', () => {
    expect(pipe.transform(4)).toEqual('Четверг');
  });
  it('transforms 5 to "Пятница" ', () => {
    expect(pipe.transform(5)).toEqual('Пятница');
  });
  it('transforms 6 to "Суббота" ', () => {
    expect(pipe.transform(6)).toEqual('Суббота');
  });
});
