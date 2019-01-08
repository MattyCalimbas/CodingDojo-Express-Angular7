import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  gold: number;
  activity = [];
  id: string;

  constructor(private _httpService: HttpService) {
  }
  ngOnInit(){
    this.start();
  }
  random(min, max){
  	return (Math.floor(Math.random() * (min-max))+ max)
  }

  farm(){
    var newgold = this.random(2,6);
    let observable = this._httpService.updateGold( this.id, {gold:newgold + this.gold});
    observable.subscribe((data:any) => {
    })
    var result = `You've earned ${newgold} at the Farm`;
    this.activity.push(result);
    this.update();
  }
  cave(){
  	var newgold = this.random(5,11);
  	let observable = this._httpService.updateGold( this.id, {gold:newgold + this.gold});
    observable.subscribe((data:any) => {
    })
  	var result = `You've earned ${newgold} at the Cave`
  	this.activity.push(result)
    this.update();
  }
  casino(){
  	var result;
  	var newgold = this.random(-100,101);
  	let observable = this._httpService.updateGold( this.id, {gold:newgold + this.gold});
    observable.subscribe((data:any) => {
    })
  	if(newgold > 0){
  		result = `You've earned ${newgold} at the Casino!`
  	}
  	else{
  		result = `You've lost ${newgold} at the Casino!`
  	}
    this.activity.push(result)
    this.update();
  }
  house(){
  	var newgold = this.random(7,16);
  	let observable = this._httpService.updateGold( this.id, {gold:newgold + this.gold});
    observable.subscribe((data:any) => {
    })
  	var result = `You've earned ${newgold} at the House`
    this.activity.push(result)
    this.update();
  }

  update(){
    let observable = this._httpService.showGold(this.id);
    observable.subscribe((data:any) => {
      this.gold = data.gold;
    })
  }

  start(){
    let observable = this._httpService.create(this.gold);
    observable.subscribe((data:any) => {
      this.gold = data.gold.gold;
      this.id = data.gold._id;
    })
  }
}
