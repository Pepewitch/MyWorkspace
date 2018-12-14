import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHeaderContentComponent } from './navigation-header-content.component';

describe('NavigationHeaderContentComponent', () => {
  let component: NavigationHeaderContentComponent;
  let fixture: ComponentFixture<NavigationHeaderContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationHeaderContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationHeaderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
