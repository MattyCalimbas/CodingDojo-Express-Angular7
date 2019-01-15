import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any = []
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getPets();
  }
  getPets(){
    let observable = this._httpService.showPets();
    observable.subscribe((data:any) =>{
      this.pets = data;
    })
  }

  addPet(){
    this._router.navigate(['/new'])
  }
}
