import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  beer: any = [];
  beers: any = [];
  beerFavorited: any = [];
  id: string;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  
  ngOnInit() {
    this.getRandomBeers();
  }
  getRandomBeers(){
    let observable = this._httpService.findRandom();
    observable.subscribe((data:any) => {
      this.beers = data;
    })
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
}
