import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LspatientListComponent } from './lspatient-list.component';

describe('LspatientListComponent', () => {
  let component: LspatientListComponent;
  let fixture: ComponentFixture<LspatientListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LspatientListComponent]
    });
    fixture = TestBed.createComponent(LspatientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
