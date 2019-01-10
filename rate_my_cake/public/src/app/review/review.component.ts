import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() cakeReview;
  comment = {rating: 5, comment: ''}
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }
  addComment(cakeId){
    let observable = this._httpService.createComment(cakeId, this.comment);
    observable.subscribe((data:any)=> {
      console.log(data);
    })
  }

}
