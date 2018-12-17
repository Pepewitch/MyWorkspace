import { Injectable } from '@angular/core';
import {
  AngularFireObject,
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/database';
import { EmbeddedLabItem } from '../types/EmbeddedLab';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmbeddedLabService {
  private items_ref: AngularFireObject<EmbeddedLabItem[]>;
  constructor(private db: AngularFireDatabase) {
    this.items_ref = this.db.object<EmbeddedLabItem[]>('embedded');
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
  updateItem(doorID: string, value: Partial<EmbeddedLabItem>) {
    return from(this.getItemObject(doorID).update({ ...value, doorID }));
  }
}
