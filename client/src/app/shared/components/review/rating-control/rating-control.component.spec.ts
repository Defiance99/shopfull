import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingControlComponent } from './rating-control.component';

describe('RatingControlComponent', () => {
  let component: RatingControlComponent;
  let fixture: ComponentFixture<RatingControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingControlComponent ],
      providers: [RatingControlComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#setRating() should set #rating to stars', () => {
    const comp = new RatingControlComponent();
    expect(comp.rating).toBe(0, '0 at first');
    comp.setRating(5);
    expect(comp.rating).toBe(5, 'set rating 5 stars');
    comp.setRating(3);
    expect(comp.rating).toBe(3, 'set rating 3 stars after first click');
  });
});
