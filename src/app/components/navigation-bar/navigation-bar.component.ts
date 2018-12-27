import { Component, OnInit, Input, ContentChild, TemplateRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
})
export class NavigationBarComponent implements OnInit {
  @ContentChild('head') head: TemplateRef<any>;
  @ContentChild('side') side: TemplateRef<any>;
  @ContentChild('main') main: TemplateRef<any>;
  @Input() header_height: string | number;
  isMobile = false;
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {}
}
