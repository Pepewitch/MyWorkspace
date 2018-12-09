import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WitchWork';
  constructor(private db: AngularFirestore, public afAuth: AngularFireAuth) {}
  ngOnInit() {}
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    this.afAuth.auth.signInWithPopup(provider).then(e => console.log(e.user)).catch(e => console.log('error' , e));
  }
  lookup() {
    console.log('click!');
    this.afAuth.user.subscribe(data => console.log(data));
  }
}
