import { Component, OnInit } from '@angular/core';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-prodotti-vetrina',
  templateUrl: './prodotti-vetrina.component.html',
  styleUrls: ['./prodotti-vetrina.component.css']
})
export class ProdottiVetrinaComponent implements OnInit {
  prodotti: Prodotto[] = [];

  constructor(private prodottiService: ProdottiService) {

  }
  ngOnInit(): void {
    this.prodotti = this.prodottiService.getAll();
    console.log(this.prodotti);
  }
}
