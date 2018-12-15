import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root',
})
export class AuthenticateService {
  constructor(public afAuth: AngularFireAuth) {}
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth
      .signInWithPopup(provider)
      .then(e => console.log(e.user))
      .catch(e => console.log('error', e));
  }
  lookup() {
    console.log('click!');
    this.afAuth.user.subscribe(data => console.log(data));
  }
}
