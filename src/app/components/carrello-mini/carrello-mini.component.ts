import { Component } from '@angular/core';
import { CarrelloService } from 'src/app/services/carrello.service';

@Component({
  selector: 'app-carrello-mini',
  templateUrl: './carrello-mini.component.html',
  styleUrls: ['./carrello-mini.component.css']
})
export class CarrelloMiniComponent {
  constructor(public carrelloService: CarrelloService) {
    
  }
}
