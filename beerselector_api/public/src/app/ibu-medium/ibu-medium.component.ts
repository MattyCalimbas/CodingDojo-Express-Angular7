import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-ibu-medium',
  templateUrl: './ibu-medium.component.html',
  styleUrls: ['./ibu-medium.component.css']
})
export class IbuMediumComponent implements OnInit {
  beers: any = []
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getBeersByIbuMedP1();
  }
  getBeersByIbuMedP1(){
    let observable = this._httpService.findByIbuMedP1();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByIbuMedP2(){
    let observable = this._httpService.findByIbuMedP2();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByIbuMedP3(){
    let observable = this._httpService.findByIbuMedP3();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
}
