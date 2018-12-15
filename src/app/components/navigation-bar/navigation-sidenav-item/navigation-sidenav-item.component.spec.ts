import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationSidenavItemComponent } from './navigation-sidenav-item.component';

describe('NavigationSidenavItemComponent', () => {
  let component: NavigationSidenavItemComponent;
  let fixture: ComponentFixture<NavigationSidenavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationSidenavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationSidenavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
