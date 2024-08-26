import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersSecndComponent } from './orders-secnd.component';

describe('OrdersSecndComponent', () => {
  let component: OrdersSecndComponent;
  let fixture: ComponentFixture<OrdersSecndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersSecndComponent]
    });
    fixture = TestBed.createComponent(OrdersSecndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
