import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  pet = {name:'', type:'', description:'', skill1:'', skill2:'', skill3:''}
  errors =[];
  
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
    let observable = this._httpService.createPet(this.pet);
    observable.subscribe((data:any) => {
      if(data['errors']) {
        for(var key in data['errors']){
          this.errors.push(data['errors'][key]['message'])
        }
      } else {
        this.goHome();
      }
    })
  }

  goHome(){
    this._router.navigate(['/'])
  }
}

