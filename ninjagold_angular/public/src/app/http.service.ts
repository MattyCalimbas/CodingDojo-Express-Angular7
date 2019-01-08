import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
   }
   create(gold) {
     return this._http.post('/golds', gold);
   }

   totalGold() {
     return this._http.get('/golds');
   }
   updateGold(id, gold) {
     return this._http.put(`/golds/${id}`, gold);
   }
   showGold(id) {
     return this._http.get(`/golds/${id}`); 
   }
   restart() {
     return this._http.delete('/golds')
   }

}
