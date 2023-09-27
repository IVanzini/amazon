import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prodotto } from 'src/app/models/prodotto';
import { ProdottiService } from 'src/app/services/prodotti.service';

@Component({
  selector: 'app-prodotto-detail',
  templateUrl: './prodotto-detail.component.html',
  styleUrls: ['./prodotto-detail.component.css']
})
export class ProdottoDetailComponent implements OnInit{
  prodotto?: Prodotto;

  constructor(private route: ActivatedRoute,
    private prodottiService: ProdottiService) {

    }
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    console.log(id);
  }
}
