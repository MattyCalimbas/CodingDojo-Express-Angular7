import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  pet:any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      let observable = this._httpService.findPet(params['id']);
      observable.subscribe((data:any) => {
        this.pet = data;
      })
    })
  }
  deletePet(id){
    let observable = this._httpService.deletePet(id);
    observable.subscribe((data:any) => {
      this._router.navigate(['/']);
    }); 
  }
}
