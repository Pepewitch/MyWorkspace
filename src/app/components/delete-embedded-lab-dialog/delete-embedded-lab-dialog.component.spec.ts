import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEmbeddedLabDialogComponent } from './delete-embedded-lab-dialog.component';

describe('DeleteEmbeddedLabDialogComponent', () => {
  let component: DeleteEmbeddedLabDialogComponent;
  let fixture: ComponentFixture<DeleteEmbeddedLabDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEmbeddedLabDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEmbeddedLabDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
