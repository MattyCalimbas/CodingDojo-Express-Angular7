import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  cake = { name:'', url:''};
  displayCake = { name: '', url:'', comments:[], averageRating: 0};
  cakes = [];

  constructor(private _httpService: HttpService) {}
  ngOnInit(){
    let observable = this._httpService.showCakes();
    observable.subscribe((data:any) => {
    this.cakes = data;
    })
  }
  onSubmit(){
    console.log('On Submit:')
    let observable = this._httpService.createCake(this.cake);
    observable.subscribe((data:any) => {
      this.cake = { name:'', url:''};
      this.ngOnInit();
    })
  }
  showCake(cakeObj){
    this.displayCake = cakeObj;
    var sum = 0;
    var avg = 0;
    var rounded = 0;
    for (var i=0; i < this.displayCake.comments.length; i++) {
      sum += this.displayCake.comments[i].rating;
    }
    avg = sum/this.displayCake.comments.length;
    rounded = Math.round( avg * 10) / 10;
    this.displayCake.averageRating = rounded;
  }
}
