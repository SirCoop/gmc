import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private testUrl = '/api/country';

  constructor(private http: HttpClient) { }

  getCountryImages(country) {
    return this.http.get(`${this.testUrl}/${country}/images`);
  }

}
