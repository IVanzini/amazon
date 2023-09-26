import { Injectable } from '@angular/core';
import { Prodotto, ProdottoACarrello } from '../models/prodotto';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  prodotti: ProdottoACarrello[] = [];
  //totale = 0;

  private _totale = 0;
  public get totale() {
    return this._totale;
  }

  // public set totale(t: number) {
  //   this._totale = t;
  // }

  constructor() { }

  aggiungi(prodotto: ProdottoACarrello) {
    let p = this.prodotti.find(x => x.id == prodotto.id);
    if (p) {
      p.qta++;
    } else {
      this.prodotti.push(prodotto);
    }
    this.calcolaTotale();
  }

  svuota() {
    this.prodotti = [];
    this.calcolaTotale();
  }

  calcolaTotale() {
    this._totale = 0;
    for (const p of this.prodotti) {
      this._totale+=(p.price*p.qta);
    }
  }

  rimuovi(prodottoId: number) {
    const p = this.prodotti.find(x => x.id == prodottoId);
    if (p) {
      const i = this.prodotti.indexOf(p);
      this.prodotti.splice(i, 1);

      this.calcolaTotale();
    }
  }
}
