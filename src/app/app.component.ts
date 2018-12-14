import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private db: AngularFirestore,
    public afAuth: AngularFireAuth,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/baseline-menu-24px.svg'),
    );
  }
  ngOnInit() {}
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
