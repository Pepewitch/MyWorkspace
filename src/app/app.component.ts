import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'WitchWork';
  constructor(private db: AngularFirestore) {}
  ngOnInit() {
    this.db
      .collection('test')
      .get()
      .subscribe(data => {
        console.log(data.docs.map(e => e.data()));
      });
  }
}
