import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidenavContentComponent } from './navigation-sidenav-content.component';

describe('NavigationSidenavContentComponent', () => {
  let component: NavigationSidenavContentComponent;
  let fixture: ComponentFixture<NavigationSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
