import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomiconComponent } from './zoomicon.component';

describe('ZoomiconComponent', () => {
  let component: ZoomiconComponent;
  let fixture: ComponentFixture<ZoomiconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomiconComponent]
    });
    fixture = TestBed.createComponent(ZoomiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
