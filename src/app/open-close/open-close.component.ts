import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  providers: [RequestsService]
})
export class OpenCloseComponent implements OnInit {

  public data: any;
  constructor(private requestsService: RequestsService) {}

  ngOnInit(): void {
    this.getData('https://faunadb.herokuapp.com/get-users');
  }

  getData(url) {
    this.requestsService.getData(url)
      .subscribe(data => {
        console.log(data);
        this.data = Object.values(data["data"]);
      });
  }
}
