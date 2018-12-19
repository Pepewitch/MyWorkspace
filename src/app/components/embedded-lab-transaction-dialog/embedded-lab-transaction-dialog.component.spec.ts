import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedLabTransactionDialogComponent } from './embedded-lab-transaction-dialog.component';

describe('EmbeddedLabTransactionDialogComponent', () => {
  let component: EmbeddedLabTransactionDialogComponent;
  let fixture: ComponentFixture<EmbeddedLabTransactionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedLabTransactionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedLabTransactionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
