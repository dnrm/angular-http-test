import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  providers: [RequestsService]
})
export class OpenCloseComponent implements OnInit {

  public connected: boolean = true;
  public routerurl: any;
  public data: any;
  constructor(private requestsService: RequestsService) {}

  ngOnInit(): void {
    if (this.connected == true) {
      this.getData('https://faunadb.herokuapp.com/get-users');
    } else {
      this.getData('http://localhost:4200/assets/config.json');
    }
  }

  getData(url) {
    this.requestsService.getData(url)
      .subscribe(data => {
        this.data = Object.values(data["data"]);
      });
  }

  navigate(item) {
    this.routerurl = item.ref["@ref"]["id"];
  }
}
