import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Mock Data Service for reference */

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(userId: Object) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
