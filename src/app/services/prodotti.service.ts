import { Injectable } from '@angular/core';
//import { PRODOTTI } from '../data/prodotti';
import { Prodotto } from '../models/prodotto';
import { Observable, catchError, delay, of, tap } from 'rxjs';
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
      return this.http.get<Prodotto[]>(`${this.baseUrl}/products`)
      .pipe(
        tap(() => console.log("risposta ricevuta dal server")),
        delay(3000),
        tap(() => console.log("sono passati 3 sec dalla risposta ricevuta dal server"))
      )
      // .pipe(
      //   catchError(err => { 
      //     console.log(err);
      //     return of([]);
      //   })
      // );
    }

    getCategories(): Observable<string[]> {
      return this.http.get<string[]>(`${this.baseUrl}/products/categories`);
    }

    getProductById(id: number): Observable<Prodotto> {
      return this.http.get<Prodotto>(`${this.baseUrl}/products/${id}`);
    }
    
}


