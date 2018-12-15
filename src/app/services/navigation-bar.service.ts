import { Injectable } from '@angular/core';
import { SidenavItem } from '../types/Navigation';

@Injectable({
  providedIn: 'root',
})
export class NavigationBarService {
  sidenav_items: SidenavItem[] = [
    {
      name: 'Home',
      link: '/',
      pathMatch: true
    },
    {
      name: 'Embedded Lab',
      link: '/embedded',
      pathMatch: false
    },
  ];
  constructor() {}
  getSidenavItems() {
    return this.sidenav_items;
  }
}
