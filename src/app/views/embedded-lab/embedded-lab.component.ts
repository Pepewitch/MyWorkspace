import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmbeddedLabService } from 'src/app/services/embedded-lab.service';
import { Subscription } from 'rxjs';
import { EmbeddedLabItem } from 'src/app/types/EmbeddedLab';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';
import { AddEmbeddedLabDialogComponent } from 'src/app/components/add-embedded-lab-dialog/add-embedded-lab-dialog.component';
import { DeleteEmbeddedLabDialogComponent } from 'src/app/components/delete-embedded-lab-dialog/delete-embedded-lab-dialog.component';
import { EmbeddedLabTransactionDialogComponent } from 'src/app/components/embedded-lab-transaction-dialog/embedded-lab-transaction-dialog.component';
import { EmbeddedLabSettingDialogComponent } from 'src/app/components/embedded-lab-setting-dialog/embedded-lab-setting-dialog.component';

@Component({
  selector: 'app-embedded-lab',
  templateUrl: './embedded-lab.component.html',
  styleUrls: ['./embedded-lab.component.scss'],
})
export class EmbeddedLabComponent implements OnInit, OnDestroy {
  embedded_subscription: Subscription;
  items: EmbeddedLabItem[];
  isMobile = false;
  constructor(
    public embedded: EmbeddedLabService,
    breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    private title: Title,
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.title.setTitle('Embedded Lab');
    this.embedded_subscription = this.embedded
      .getItemsObject()
      .valueChanges()
      .subscribe(event => {
        const items: EmbeddedLabItem[] = [];
        console.log(event);
        for (const key in event) {
          if (event.hasOwnProperty(key)) {
            this.embedded
              .getSetting(event[key].doorID)
              .get()
              .subscribe(e => {
                console.log('from get ', e.data());
              });
            items.push(event[key]);
          }
        }
        this.items = items;
      });
  }
  ngOnDestroy() {
    this.embedded_subscription.unsubscribe();
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(AddEmbeddedLabDialogComponent);
  }
  openDeleteDialog(item: EmbeddedLabItem) {
    const dialogRef = this.dialog.open(DeleteEmbeddedLabDialogComponent, {
      data: item,
    });
  }
  openTransactionDialog(item: EmbeddedLabItem) {
    const dialogRef = this.dialog.open(EmbeddedLabTransactionDialogComponent, {
      data: item,
    });
  }
  openSettingDialog(item: EmbeddedLabItem) {
    const dialogRef = this.dialog.open(EmbeddedLabSettingDialogComponent, {
      data: item,
    });
  }
  open(doorID: string) {
    this.embedded.open(doorID).subscribe();
  }
  close(doorID: string) {
    this.embedded.close(doorID).subscribe();
  }
  ring(doorID: string) {
    this.embedded.updateItem(doorID, { action: 'ring' }).subscribe();
  }
  dismiss(doorID: string) {
    this.embedded.updateItem(doorID, { action: 'dismiss' }).subscribe();
  }
}
