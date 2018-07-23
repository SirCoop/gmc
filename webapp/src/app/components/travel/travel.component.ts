import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.scss'],
})
export class TravelComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private testUrl = '/api';

  fetchData() {
    return this.http.get(this.testUrl)
      .subscribe(data => {
        console.log('data: ', data);
      });
  }

  ngOnInit() {
    this.fetchData();

  }

}
