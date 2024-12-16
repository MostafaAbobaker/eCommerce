import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupOldSchoolComponent } from './signup-old-school.component';

describe('SignupOldSchoolComponent', () => {
  let component: SignupOldSchoolComponent;
  let fixture: ComponentFixture<SignupOldSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupOldSchoolComponent]
    });
    fixture = TestBed.createComponent(SignupOldSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
