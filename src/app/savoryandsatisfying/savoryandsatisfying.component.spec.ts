import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavoryandsatisfyingComponent } from './savoryandsatisfying.component';

describe('SavoryandsatisfyingComponent', () => {
  let component: SavoryandsatisfyingComponent;
  let fixture: ComponentFixture<SavoryandsatisfyingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SavoryandsatisfyingComponent]
    });
    fixture = TestBed.createComponent(SavoryandsatisfyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
