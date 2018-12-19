import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedLabSettingDialogComponent } from './embedded-lab-setting-dialog.component';

describe('EmbeddedLabSettingDialogComponent', () => {
  let component: EmbeddedLabSettingDialogComponent;
  let fixture: ComponentFixture<EmbeddedLabSettingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedLabSettingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedLabSettingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
