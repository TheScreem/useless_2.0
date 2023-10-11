import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3001/api/saluer';  // Assurez-vous que l'URL est correcte

  constructor(private http: HttpClient) { }

  getSalutation(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
