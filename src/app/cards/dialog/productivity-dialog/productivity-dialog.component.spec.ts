import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductivityDialogComponent } from './productivity-dialog.component';

describe('ProductivityDialogComponent', () => {
  let component: ProductivityDialogComponent;
  let fixture: ComponentFixture<ProductivityDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductivityDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductivityDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
