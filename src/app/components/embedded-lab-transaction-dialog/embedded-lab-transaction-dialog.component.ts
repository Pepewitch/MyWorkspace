import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmbeddedLabService } from 'src/app/services/embedded-lab.service';
import { Subscription, of } from 'rxjs';
import { EmbeddedLabTransaction } from 'src/app/types/EmbeddedLab';
import { delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-embedded-lab-transaction-dialog',
  templateUrl: './embedded-lab-transaction-dialog.component.html',
  styleUrls: ['./embedded-lab-transaction-dialog.component.scss'],
})
export class EmbeddedLabTransactionDialogComponent
  implements OnInit, OnDestroy {
  transaction_subscription: Subscription;
  transactions: EmbeddedLabTransaction[];
  displayedColumns = ['createdAt', 'action', 'status', 'from'];
  constructor(
    public dialogRef: MatDialogRef<EmbeddedLabTransactionDialogComponent>,
    private embedded: EmbeddedLabService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}
  ngOnInit() {
    this.transaction_subscription = this.embedded
      .getTransactionList(this.data.doorID)
      .valueChanges()
      .pipe(
        concatMap((value, index) => {
          if (index === 0) {
            return of(value).pipe(delay(500));
          }
          return of(value);
        }),
      )
      .subscribe(transactions => {
        this.transactions = transactions
          .map(e => {
            e.createdAt = new Date(e.createdAt);
            return e;
          })
          .sort((a, b) => {
            return a.createdAt > b.createdAt ? -1 : 1;
          });
      });
  }
  ngOnDestroy() {
    this.transaction_subscription.unsubscribe();
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  submit() {
    this.dialogRef.close(true);
  }
}
