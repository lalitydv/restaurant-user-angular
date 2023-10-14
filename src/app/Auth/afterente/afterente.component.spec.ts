import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterenteComponent } from './afterente.component';

describe('AfterenteComponent', () => {
  let component: AfterenteComponent;
  let fixture: ComponentFixture<AfterenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfterenteComponent]
    });
    fixture = TestBed.createComponent(AfterenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
