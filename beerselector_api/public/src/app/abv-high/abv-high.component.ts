import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-abv-high',
  templateUrl: './abv-high.component.html',
  styleUrls: ['./abv-high.component.css']
})
export class AbvHighComponent implements OnInit {
  beers: any = []
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.getBeersByAbvHighP1();
  }
  getBeersByAbvHighP1(){
    let observable = this._httpService.findByAbvHighP1();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
  getBeersByAbvHighP2(){
    let observable = this._httpService.findByAbvHighP2();
    observable.subscribe((data:any) => {
      console.log("beer data", data);
      this.beers = data;
    })
  }
}
