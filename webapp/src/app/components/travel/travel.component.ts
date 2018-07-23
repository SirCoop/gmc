import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api').subscribe(data => {
      console.log('data: ', data);
    });

  }

}
