import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHandlesService {

  constructor(private http: HttpClient) { }

  moviesUrl = 'https://mocki.io/v1/072f4309-6b86-4ecc-b055-e16192d9f76a'; 

  getCall() {
    return this.http.get(this.moviesUrl);
  }

}
