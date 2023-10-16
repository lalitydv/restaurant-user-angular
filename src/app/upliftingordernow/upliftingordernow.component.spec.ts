import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpliftingordernowComponent } from './upliftingordernow.component';

describe('UpliftingordernowComponent', () => {
  let component: UpliftingordernowComponent;
  let fixture: ComponentFixture<UpliftingordernowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpliftingordernowComponent]
    });
    fixture = TestBed.createComponent(UpliftingordernowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
