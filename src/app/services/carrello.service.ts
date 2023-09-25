import { Injectable } from '@angular/core';
import { Prodotto } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  prodotti: Prodotto[] = [];

  constructor() { }

  aggiungi(prodotto: Prodotto) {
    this.prodotti.push(prodotto);
  }
}
