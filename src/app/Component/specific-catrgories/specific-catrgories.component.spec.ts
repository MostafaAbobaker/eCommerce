import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificCatrgoriesComponent } from './specific-catrgories.component';

describe('SpecificCatrgoriesComponent', () => {
  let component: SpecificCatrgoriesComponent;
  let fixture: ComponentFixture<SpecificCatrgoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecificCatrgoriesComponent]
    });
    fixture = TestBed.createComponent(SpecificCatrgoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
