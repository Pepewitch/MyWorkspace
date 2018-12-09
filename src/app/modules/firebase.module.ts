import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';

const modules = [AngularFirestoreModule , AngularFireAuthModule];

@NgModule({
  imports: modules,
  exports: modules,
})
export class FirebaseModule {}
