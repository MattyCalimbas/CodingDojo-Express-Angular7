import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }
   createCake(cake){
     return this._http.post('/api/cakes', cake);
   }
   showCakes(){
     return this._http.get('/api/cakes');
   }
   createComment(cakeId, commentObj){
    return this._http.post('/api/cakes/'+cakeId, commentObj)
   }
}
