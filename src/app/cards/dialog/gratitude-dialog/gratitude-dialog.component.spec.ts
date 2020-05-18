import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GratitudeDialogComponent } from './gratitude-dialog.component';

describe('GratitudeDialogComponent', () => {
  let component: GratitudeDialogComponent;
  let fixture: ComponentFixture<GratitudeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GratitudeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GratitudeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
