import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationBarService } from './services/navigation-bar.service';
import { SidenavItem } from './types/Navigation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  sidenav_items: SidenavItem[];
  constructor(
    private navigation: NavigationBarService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-menu-24px.svg'),
    );
    iconRegistry.addSvgIcon(
      'clear',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-clear-24px.svg'),
    );
  }
  ngOnInit() {
    this.sidenav_items = this.navigation.getSidenavItems();
  }
}
