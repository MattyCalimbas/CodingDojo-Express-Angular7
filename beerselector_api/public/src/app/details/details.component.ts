import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  beer:any;
  food_pairings:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }


  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      let observable = this._httpService.findById(params['id']);
      observable.subscribe((data:any) => {
        this.beer = data;
        console.log('this.beer', this.beer)
        console.log('name', this.beer[0].name)
        this.food_pairings = this.beer[0].food_pairing;
        console.log('food', this.food_pairings)
      })
    })
  }

}
