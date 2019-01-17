import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ibumild',
  templateUrl: './ibumild.component.html',
  styleUrls: ['./ibumild.component.css']
})
export class IbuMildComponent implements OnInit {
  beer: any = [];
  beers: any = [];
  beerFavorited: any = [];
  id: string;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getFaves();
    this.getBeersByIbuMildP1();
  }
  getFaves(){
    let observable = this._httpService.getFromSess(this.beer);
    observable.subscribe((data:any) => {
      console.log('session beer data',data);
      this.beerFavorited = data;
    })
  }
  favBeer(id){
    this.beerFavorited.push(id);
    var beer_ids = this.beerFavorited;
    let observable = this._httpService.addToSess(beer_ids);
    observable.subscribe((data: any) => {
      console.log('beer favorited data', data)
    })
  }
  getBeersByIbuMildP1(){
    let observable = this._httpService.findByIbuMildP1();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByIbuMildP2(){
    let observable = this._httpService.findByIbuMildP2();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByIbuMildP3(){
    let observable = this._httpService.findByIbuMildP3();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
}
