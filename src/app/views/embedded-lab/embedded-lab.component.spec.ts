import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedLabComponent } from './embedded-lab.component';

describe('EmbeddedLabComponent', () => {
  let component: EmbeddedLabComponent;
  let fixture: ComponentFixture<EmbeddedLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
