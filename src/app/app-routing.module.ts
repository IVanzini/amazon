import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdottiVetrinaComponent } from './components/prodotti-vetrina/prodotti-vetrina.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { HomeComponent } from './components/home/home.component';
import { ProdottoDetailComponent } from './components/prodotto-detail/prodotto-detail.component';

const routes: Routes = [
  {
    path: "vetrina", component: ProdottiVetrinaComponent
  },
  {
    path: "carrello", component: CarrelloComponent
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "prodotti/:id", component: ProdottoDetailComponent
  },
  {
    path: "", redirectTo: "/home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
