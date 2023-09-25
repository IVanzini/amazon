import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottoPreviewComponent } from './components/prodotto-preview/prodotto-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottoPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
