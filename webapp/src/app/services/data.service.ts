import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = '/api';

  constructor(private http: HttpClient) { }

  getCountryImageUrls(country) {
    return this.http.get(`${this.baseUrl}/country/${country}/images`);
  }

  getTestimoniesList() {
    return this.http.get(`${this.baseUrl}/leadership/testimonies/list`);
  }

  getTestimony(fileName): Observable<any> {
    /*
    * HttpClient automatically returns an Observable
    * Subscribe to Observable in component requesting this data    
    * e.g. this.dataService.getWriting(type, fileName).subscribe(res => this.pdf$ = res);
    */
    return this.http.get(`${this.baseUrl}/leadership/testimonies/${fileName}.pdf`);
  }

  getWritingLists() {
    return this.http.get(`${this.baseUrl}/writings/lists`);
  }

  getWriting(type, fileName): Observable<any> {
    /*
    * HttpClient automatically returns an Observable
    * Subscribe to Observable in component requesting this data    
    * e.g. this.dataService.getWriting(type, fileName).subscribe(res => this.pdf$ = res);
    */
    return this.http.get(`${this.baseUrl}/writings/${type}/${fileName}.pdf`);
  }

  getHeadScan(fileName: string): Observable<any> {
    // TODO: figure out how to set base url path in three.js file loader for the face files.
    // Three.js pulls from root by default
    return this.http.get(`${this.baseUrl}/threejs/${fileName}`);
    // return this.http.get(`${fileName}`);
  }

  sendCommentForm(contactForm: any): Observable<Object> {
    // if return type is Observable<Promise<any>> then the following works
    // return this.http.post(`${this.baseUrl}/contact`, contactForm).pipe(map((res: Response) => res.json()));

    return this.http.post(`${this.baseUrl}/contact`, contactForm).pipe(map(res => res));
  }

}
