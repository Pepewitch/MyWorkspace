import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmbeddedLabDialogComponent } from './add-embedded-lab-dialog.component';

describe('AddEmbeddedLabDialogComponent', () => {
  let component: AddEmbeddedLabDialogComponent;
  let fixture: ComponentFixture<AddEmbeddedLabDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmbeddedLabDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmbeddedLabDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
