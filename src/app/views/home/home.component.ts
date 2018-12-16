import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .object('embedded')
      .valueChanges()
      .subscribe(e => console.log(e));
  }
  test() {
    this.db.object('embedded').set([
      {
        doorID: 1,
        status: 'close',
        action: 'wait',
      },
      {
        doorID: 2,
        status: 'close',
        action: 'wait',
      },
      {
        doorID: 3,
        status: 'close',
        action: 'wait',
      },
      {
        doorID: 4,
        status: 'close',
        action: 'wait',
      },
    ]);
  }
  test2() {
    this.db.object('embedded/0').set({
      doorID: 1,
      status: 'close',
      action: 'wait',
    });
  }
}
