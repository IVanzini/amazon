import { Injectable } from '@angular/core';
//import { PRODOTTI } from '../data/prodotti';
import { Prodotto } from '../models/prodotto';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

//dependency injection
@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  private baseUrl = "https://fakestoreapi.com";

  constructor(private http: HttpClient) { }

  // getAll() : Prodotto[] {
  //   return PRODOTTI;
  // }

  // getAll() : Observable<Prodotto[]> {
  //     return of(PRODOTTI);
  //   }

    getProducts() : Observable<Prodotto[]> {
      return this.http.get<Prodotto[]>(`${this.baseUrl}/products`);
    }

    getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}/products/categories`);
    }
}
