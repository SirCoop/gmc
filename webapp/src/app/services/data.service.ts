import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  getCountryImageUrls(country) {
    return this.http.get(`${this.baseUrl}/country/${country}/images`);
  }

  getWritingLists() {
    return this.http.get(`${this.baseUrl}/writings/lists`);
  }

  getWriting(type, id) {
    return this.http.get(`${this.baseUrl}/writings/${type}/${id}`);
  }

}
