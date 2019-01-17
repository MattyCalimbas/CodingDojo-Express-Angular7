import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }
  
  findRandom(){
    return this._http.get("https://api.punkapi.com/v2/beers?random&per_page=15")
  }
  //IBU - Mild
  findByIbuMildP1(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_lt=40&page=1&per_page=15");
  }
  findByIbuMildP2(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_lt=40&page=2&per_page=15");
  }
  findByIbuMildP3(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_lt=40&page=3&per_page=15");
  }
  //IBU - Med
  findByIbuMedP1(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_gt=40&ibu_lt=80&page=1&per_page=15");
  }
  findByIbuMedP2(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_gt=40&ibu_lt=80&page=2&per_page=15");
  }
  findByIbuMedP3(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_gt=40&ibu_lt=80&&page=3&per_page=15");
  }
  //IBU - High
  findByIbuHighP1(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_gt=80&page=1&per_page=15");
  }
  findByIbuHighP2(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_gt=80&page=2&per_page=15");
  }
  findByIbuHighP3(){
    return this._http.get("https://api.punkapi.com/v2/beers?ibu_gt=80&page=3&per_page=15");
  }
  //ABV - Lite
  findByAbvLiteP1(){
    return this._http.get("https://api.punkapi.com/v2/beers?abv_lt=5&page=1&per_page=15");
  }
  findByAbvLiteP2(){
    return this._http.get("https://api.punkapi.com/v2/beers?abv_lt=5&page=2&per_page=15");
  }
  findByAbvLiteP3(){
    return this._http.get("https://api.punkapi.com/v2/beers?abv_lt=5&page=3&per_page=15");
  }
  //ABV - Med
  findByAbvMedP1(){
    return this._http.get("https://api.punkapi.com/v2/beers?abv_gt=5&abv_lt=8&page=1&per_page=15");
  }
  findByAbvMedP2(){
    return this._http.get("https://api.punkapi.com/v2/beers?abv_gt=5&abv_lt=8&page=2&per_page=15");
  }
  findByAbvMedP3(){
    return this._http.get("https://api.punkapi.com/v2/beers?abv_gt=5&abv_lt=8&page=3&per_page=15");
  }
  //ABV - High
  findByAbvHighP1(){
    return this._http.get('https://api.punkapi.com/v2/beers?abv_gt=8&page=1&per_page=15');
  }
  findByAbvHighP2(){
    return this._http.get('https://api.punkapi.com/v2/beers?abv_gt=8&page=2&per_page=15');
  }
  // Details
  findById(id){
    return this._http.get(`https://api.punkapi.com/v2/beers/${id}`)
  }

  // addToSess(beer_ids){
  //   return this._http.post('/session', (req, res) => {
  //     req.session.beer_ids = beer_ids;
  //     console.log("request session:", req.session.beer_id)
  //   })
  // }

  addToSess(beer_ids){
    return this._http.post('/session', beer_ids)
  }
  getFromSess(beer_ids){
    return this._http.get('/session', beer_ids)
  }
  // getFromApi(beers){
  //   return this._http.get('/https://api.punkapi.com/v2/beers?id|id|id')
  // }
}