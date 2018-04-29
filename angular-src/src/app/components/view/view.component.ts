import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public students: any;
  constructor(public http: Http) { }

  ngOnInit() {
    this.data();
  }

  data() {
    this.http.get('http://localhost:3000/get-data')
    .map(res => res.json()).subscribe((res: any) => {
      this.students = res;
      console.log(this.students);
    })
  }

}
