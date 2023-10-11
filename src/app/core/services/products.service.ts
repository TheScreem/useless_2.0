import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'http://localhost:3001/api';

  constructor(private http: HttpClient) { }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/product/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }
}
