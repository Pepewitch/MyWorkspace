import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { EmbeddedLabSetting } from 'src/app/types/EmbeddedLab';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }
  getEmbedded() {
    return this.db.collection<EmbeddedLabSetting>('embedded');
  }
}
