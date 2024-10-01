import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LspatientNewComponent } from './lspatient-new.component';

describe('LspatientNewComponent', () => {
  let component: LspatientNewComponent;
  let fixture: ComponentFixture<LspatientNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LspatientNewComponent]
    });
    fixture = TestBed.createComponent(LspatientNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
