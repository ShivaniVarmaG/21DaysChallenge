import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyDialogComponent } from './study-dialog.component';

describe('StudyDialogComponent', () => {
  let component: StudyDialogComponent;
  let fixture: ComponentFixture<StudyDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
