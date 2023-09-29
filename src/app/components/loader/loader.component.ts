import { Component, Input } from '@angular/core';
import { Colore } from 'src/app/models/enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  @Input()
  color: Colore = Colore.Neutro;
}


