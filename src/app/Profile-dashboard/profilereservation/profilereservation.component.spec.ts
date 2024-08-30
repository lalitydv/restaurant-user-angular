import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilereservationComponent } from './profilereservation.component';

describe('ProfilereservationComponent', () => {
  let component: ProfilereservationComponent;
  let fixture: ComponentFixture<ProfilereservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilereservationComponent]
    });
    fixture = TestBed.createComponent(ProfilereservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
