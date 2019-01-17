import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-abv-medium',
  templateUrl: './abv-medium.component.html',
  styleUrls: ['./abv-medium.component.css']
})
export class AbvMediumComponent implements OnInit {
  beers: any = []
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getBeersByAbvMedP1();
  }
  getBeersByAbvMedP1(){
    let observable = this._httpService.findByAbvMedP1();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByAbvMedP2(){
    let observable = this._httpService.findByAbvMedP2();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByAbvMedP3(){
    let observable = this._httpService.findByAbvMedP3();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
}
