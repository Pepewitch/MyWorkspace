import { AngularFirestoreModule } from '@angular/fire/firestore';
import { NgModule } from '@angular/core';

const modules = [AngularFirestoreModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class FirebaseModule {}
