import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LspatientInactiveComponent } from './lspatient-inactive.component';

describe('LspatientInactiveComponent', () => {
  let component: LspatientInactiveComponent;
  let fixture: ComponentFixture<LspatientInactiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LspatientInactiveComponent]
    });
    fixture = TestBed.createComponent(LspatientInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
