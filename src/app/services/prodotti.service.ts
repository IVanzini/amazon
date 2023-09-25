import { Injectable } from '@angular/core';
import { PRODOTTI } from '../data/prodotti';
import { Prodotto } from '../models/prodotto';

//dependency injection
@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor() { }

  getAll() : Prodotto[] {
    return PRODOTTI;
  }
}
