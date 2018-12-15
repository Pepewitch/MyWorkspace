import { Component, OnInit, Input } from '@angular/core';
import { SidenavItem } from 'src/app/types/Navigation';

@Component({
  selector: 'app-navigation-sidenav-item',
  templateUrl: './navigation-sidenav-item.component.html',
  styleUrls: ['./navigation-sidenav-item.component.scss'],
})
export class NavigationSidenavItemComponent implements OnInit {
  @Input() item: SidenavItem;
  constructor() {}

  ngOnInit() {}
}
