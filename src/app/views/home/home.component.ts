import { Component, OnInit } from '@angular/core';
import { RealtimeDatabaseService } from 'src/app/services/firebase/realtime-database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public rtdb: RealtimeDatabaseService) { }

  ngOnInit() {
  }
  test() {
    this.rtdb.add();
  }
}
