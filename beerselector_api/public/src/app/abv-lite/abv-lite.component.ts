import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-abv-lite',
  templateUrl: './abv-lite.component.html',
  styleUrls: ['./abv-lite.component.css']
})
export class AbvLiteComponent implements OnInit {
  beers: any = []
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getBeersByAbvLiteP1();
  }
  getBeersByAbvLiteP1(){
    let observable = this._httpService.findByAbvLiteP1();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByAbvLiteP2(){
    let observable = this._httpService.findByAbvLiteP2();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByAbvLiteP3(){
    let observable = this._httpService.findByAbvLiteP3();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
}