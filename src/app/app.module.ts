import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { ProdottoPreviewComponent } from './components/prodotto-preview/prodotto-preview.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CarrelloMiniComponent } from './components/carrello-mini/carrello-mini.component';
import { HeaderComponent } from './components/header/header.component';
import { CategorieSelettoreComponent } from './components/categorie-selettore/categorie-selettore.component';
import { HomeComponent } from './components/home/home.component';
import { ProdottoDetailComponent } from './components/prodotto-detail/prodotto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdottiVetrinaComponent,
    ProdottoPreviewComponent,
    CarrelloComponent,
    CarrelloMiniComponent,
    HeaderComponent,
    CategorieSelettoreComponent,
    HomeComponent,
    ProdottoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
