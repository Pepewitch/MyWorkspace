import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmbeddedLabService } from 'src/app/services/embedded-lab.service';
import { Subscription } from 'rxjs';
import { EmbeddedLabItem } from 'src/app/types/EmbeddedLab';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { AddEmbeddedLabDialogComponent } from './add-embedded-lab-dialog/add-embedded-lab-dialog.component';
import { DeleteEmbeddedLabDialogComponent } from './delete-embedded-lab-dialog/delete-embedded-lab-dialog.component';

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
  ) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

  ngOnInit() {
    this.embedded_subscription = this.embedded
      .getItemsObject()
      .valueChanges()
      .subscribe(event => {
        const items: EmbeddedLabItem[] = [];
        for (const key in event) {
          if (event.hasOwnProperty(key)) {
            items.push(event[key]);
          }
        }
        this.items = items;
      });
  }
  ngOnDestroy() {
    this.embedded_subscription.unsubscribe();
  }
  delete(doorID: string) {
    this.embedded.deleteItem(doorID).subscribe();
  }
  add(doorID: string, name?: string) {
    this.embedded.addItem(doorID, name).subscribe();
  }
  openAddDialog() {
    const dialogRef = this.dialog.open(AddEmbeddedLabDialogComponent);
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.doorID) {
        this.add(data.doorID, data.name);
      }
    });
  }
  openDeleteDialog(item: EmbeddedLabItem) {
    const dialogRef = this.dialog.open(DeleteEmbeddedLabDialogComponent, {
      data: item,
    });
    dialogRef.afterClosed().subscribe(sure => {
      if (sure) {
        this.delete(item.doorID);
      }
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
