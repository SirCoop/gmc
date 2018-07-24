import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule  } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private testUrl = '/api';

  constructor(private http: HttpClient) { }

  getCountryImages(country) {
    return this.http.get(`${this.testUrl}/${country}/images`);
  }

}
