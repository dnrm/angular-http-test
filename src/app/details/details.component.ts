import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public name: string;
  public lastname: string;
  public src: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.name = params.name;
      this.lastname = params.lastname;
      this.src = params.src;
    })
  }
}
