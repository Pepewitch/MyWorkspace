import { Injectable } from '@angular/core';
import {
  AngularFireObject,
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/database';
import { EmbeddedLabItem, EmbeddedLabTransaction } from '../types/EmbeddedLab';
import { from, forkJoin, interval } from 'rxjs';
import { flatMap, take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmbeddedLabService {
  private items_ref: AngularFireObject<EmbeddedLabItem[]>;
  constructor(private db: AngularFireDatabase) {
    this.items_ref = this.db.object<EmbeddedLabItem[]>('embedded');
  }
  getTransactionList(doorID: string) {
    return this.db.list<EmbeddedLabTransaction>(`embedded_transactions/${doorID}`);
  }
  getItemsObject() {
    return this.items_ref;
  }
  getItemObject(doorID: string) {
    return this.db.object<EmbeddedLabItem>(`embedded/${doorID}`);
  }
  deleteItem(doorID: string) {
    return from(this.getItemObject(doorID).remove());
  }
  addItem(doorID: string, name?: string) {
    return from(
      this.getItemObject(doorID).set({
        doorID,
        name: name ? name : doorID,
        status: 'close',
        action: 'wait',
      }),
    );
  }
  addTransaction(doorID: string, transaction: EmbeddedLabTransaction) {
    return from(this.getTransactionList(doorID).push(transaction));
  }
  updateItem(doorID: string, value: Partial<EmbeddedLabItem>) {
    const item = this.getItemObject(doorID);
    return item.valueChanges().pipe(
      take(1),
      flatMap(current => {
        return forkJoin(
          item.update({ ...value, doorID }),
          this.addTransaction(doorID, {
            doorID,
            createdAt: new Date().toISOString(),
            from: 'Web application',
            ...current,
            ...value,
          }),
        );
      }),
    );
  }
  open(doorID: string) {
    return this.updateItem(doorID, { status: 'open', action: 'wait' });
  }
  close(doorID: string) {
    return this.updateItem(doorID, { status: 'close', action: 'wait' });
  }
}
