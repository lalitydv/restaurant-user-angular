import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileSecondComponent } from './my-profile-second.component';

describe('MyProfileSecondComponent', () => {
  let component: MyProfileSecondComponent;
  let fixture: ComponentFixture<MyProfileSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProfileSecondComponent]
    });
    fixture = TestBed.createComponent(MyProfileSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
