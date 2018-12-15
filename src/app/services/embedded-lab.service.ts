import { Injectable, OnInit } from '@angular/core';
import { RealtimeDatabaseService } from './firebase/realtime-database.service';
import { AngularFireObject } from '@angular/fire/database';
import { EmbeddedLabItem } from '../types/EmbeddedLab';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmbeddedLabService {
  private item: AngularFireObject<EmbeddedLabItem>;
  constructor(private realtime: RealtimeDatabaseService) {
    this.item = this.realtime.getEmbedded();
  }
  getObserver() {
    return this.item.valueChanges();
  }
  set(value: EmbeddedLabItem) {
    return from(this.item.set(value));
  }
  update(value: Partial<EmbeddedLabItem>) {
    return from(this.item.update(value));
  }
  open() {
    return this.set({ action: 'wait', status: 'open' });
  }
  close() {
    return this.set({ action: 'dismiss', status: 'close' });
  }
}
