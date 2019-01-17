import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-ibu-high',
  templateUrl: './ibu-high.component.html',
  styleUrls: ['./ibu-high.component.css']
})
export class IbuHighComponent implements OnInit {
  beers: any = []
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getBeersByIbuHighP1();
  }
  getBeersByIbuHighP1(){
    let observable = this._httpService.findByIbuHighP1();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByIbuHighP2(){
    let observable = this._httpService.findByIbuHighP2();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByIbuHighP3(){
    let observable = this._httpService.findByIbuHighP3();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
}
