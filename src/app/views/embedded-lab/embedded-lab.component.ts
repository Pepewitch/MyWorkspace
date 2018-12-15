import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmbeddedLabService } from 'src/app/services/embedded-lab.service';
import { Subscription } from 'rxjs';
import { EmbeddedLabItem } from 'src/app/types/EmbeddedLab';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-embedded-lab',
  templateUrl: './embedded-lab.component.html',
  styleUrls: ['./embedded-lab.component.scss'],
})
export class EmbeddedLabComponent implements OnInit, OnDestroy {
  embedded_subscription: Subscription;
  current_item: EmbeddedLabItem;
  last_item: EmbeddedLabItem;
  isMobile = false;
  constructor(
    public embedded: EmbeddedLabService,
    breakpointObserver: BreakpointObserver,
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.embedded_subscription = this.embedded.getObserver().subscribe(item => {
      console.log(item);
      this.last_item = this.current_item;
      this.current_item = item;
    });
  }
  ngOnDestroy() {
    this.embedded_subscription.unsubscribe();
  }
  open() {
    this.embedded.open().subscribe();
  }
  close() {
    this.embedded.close().subscribe();
  }
  ring() {
    this.embedded.update({ action: 'ring' }).subscribe();
  }
  dismiss() {
    this.embedded.update({ action: 'dismiss' }).subscribe();
  }
}
