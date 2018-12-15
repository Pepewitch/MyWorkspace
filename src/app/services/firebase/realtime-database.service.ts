import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class RealtimeDatabaseService {
  constructor(private db: AngularFireDatabase) {
    const item = this.db.object('embedded');
    item.snapshotChanges().subscribe(e => {
      console.log('new : ', e.payload.val());
    });
  }
  add() {
    this.db.object('embedded').set({ name: 'HelloWorld' + Math.random() });
  }
}
