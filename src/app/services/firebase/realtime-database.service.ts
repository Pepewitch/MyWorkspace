import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { EmbeddedLabItem } from 'src/app/types/EmbeddedLab';

@Injectable({
  providedIn: 'root',
})
export class RealtimeDatabaseService {
  constructor(private db: AngularFireDatabase) {
  }
  getEmbedded() {
    return this.db.object<EmbeddedLabItem>('embedded');
  }
  forceOpen() {
    const item = this.db.object('embedded');
    item.set({ status: 'open', action: 'wait' });
  }
  forceClose() {
    const item = this.db.object('embedded');
    item.set({ status: 'close', action: 'dismiss' });
  }
}
