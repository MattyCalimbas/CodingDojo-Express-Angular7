import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  beer: any = [];
  beers: any = [];
  id: string;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getFaves();
    console.log('beers', this.beers)
  }
  getFaves(){
    let observable = this._httpService.getFromSess(this.beer);
    observable.subscribe((data:any) => {
      console.log('fave beer data',data);
      this.beers = data;
    })
  }
  // getFavesfromApi(){
  //   let observable = this._httpService.getFromApi(this.beers);
  //   observable.subscribe((data:any) => {
  //   })
  // }
}
