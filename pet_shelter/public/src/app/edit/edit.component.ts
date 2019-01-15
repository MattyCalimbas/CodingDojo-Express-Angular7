import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
  editPet(){
    let observable = this._httpService.updatePet(this.pet._id, this.pet);
    observable.subscribe((data:any) => {
      this.goHome()
    })
  }
  goHome(){
    this._router.navigate(['/'])
  }
}
