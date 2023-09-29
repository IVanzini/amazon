import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service';
import { Colore } from 'src/app/models/enum';
import { of,catchError} from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrls: ['./prodotti-vetrina.component.css']
})
export class ProdottiVetrinaComponent implements OnInit {
  prodotti: Prodotto[] = [];

  Colore = Colore;
  errorMessage="";

  constructor(private prodottiService: ProdottiService) {

  }
  ngOnInit(): void {
    //this.prodotti = this.prodottiService.getAll();
    this.prodottiService.getProducts()
    .pipe(
      catchError(err => { 
        this.errorMessage = err.message;
        return of([]);
      })
    )
    .subscribe(dati => {this.prodotti = dati});
    console.log(this.prodotti);
  }
}
