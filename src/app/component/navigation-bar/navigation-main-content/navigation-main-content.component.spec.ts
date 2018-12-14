import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMainContentComponent } from './navigation-main-content.component';

describe('NavigationMainContentComponent', () => {
  let component: NavigationMainContentComponent;
  let fixture: ComponentFixture<NavigationMainContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMainContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
