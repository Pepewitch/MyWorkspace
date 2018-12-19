import { Injectable } from '@angular/core';
import {
  AngularFireObject,
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/database';
import {
  EmbeddedLabItem,
  EmbeddedLabTransaction,
  EmbeddedLabSetting,
} from '../types/EmbeddedLab';
import { from, forkJoin, interval } from 'rxjs';
import { flatMap, take, map } from 'rxjs/operators';
import { FirestoreService } from './firebase/firestore.service';

@Injectable({
  providedIn: 'root',
})
export class EmbeddedLabService {
  private items_ref: AngularFireObject<EmbeddedLabItem[]>;
  constructor(private db: AngularFireDatabase, private fs: FirestoreService) {
    this.items_ref = this.db.object<EmbeddedLabItem[]>('embedded');
  }
  getTransactionList(doorID: string) {
    return this.db.list<EmbeddedLabTransaction>(
      `embedded_transactions/${doorID}`,
    );
  }
  getItemsObject() {
    return this.items_ref;
  }
  getItemObject(doorID: string) {
    if (doorID.trim().length === 0) {
      alert('ID should not be neither space nor empty');
      throw new Error('ID should not be neither space nor empty');
    }
    return this.db.object<EmbeddedLabItem>(`embedded/${doorID}`);
  }
  getSetting(doorID: string) {
    if (doorID.trim().length === 0) {
      alert('ID should not be neither space nor empty');
      throw new Error('ID should not be neither space nor empty');
    }
    return this.fs.getEmbedded().doc<EmbeddedLabSetting>(doorID);
  }
  setDontDisturb(doorID: string, fr: Date, to: Date) {
    return from(
      this.getSetting(doorID).update({
        from: fr.toISOString(),
        to: to.toISOString(),
      }),
    );
  }
  removeDontDisturb(doorID: string) {
    return from(
      this.getSetting(doorID).update({
        from: null,
        to: null,
      }),
    );
  }
  setWhitelist(doorID: string, whitelist: boolean) {
    return from(this.getSetting(doorID).update({ whitelist }));
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
