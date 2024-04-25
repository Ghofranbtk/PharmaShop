import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductSwapComponent } from './view-product-swap.component';

describe('ViewProductSwapComponent', () => {
  let component: ViewProductSwapComponent;
  let fixture: ComponentFixture<ViewProductSwapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductSwapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductSwapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
