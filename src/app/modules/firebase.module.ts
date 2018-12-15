import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const modules = [
  AngularFirestoreModule,
  AngularFireAuthModule,
  AngularFireDatabaseModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class FirebaseModule {}
