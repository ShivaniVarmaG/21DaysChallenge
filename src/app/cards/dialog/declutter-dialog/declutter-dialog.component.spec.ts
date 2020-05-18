import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclutterDialogComponent } from './declutter-dialog.component';

describe('DeclutterDialogComponent', () => {
  let component: DeclutterDialogComponent;
  let fixture: ComponentFixture<DeclutterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclutterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclutterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
