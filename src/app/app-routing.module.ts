import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './menus/acceuil/acceuil.component';
import { AProposComponent } from './menus/a-propos/a-propos.component';
import { ServicesComponent } from './menus/services/services.component';
import { EvenementsComponent } from './menus/evenements/evenements.component';
import { BateauxComponent } from './menus/bateaux/bateaux.component';
import { DetailBateauComponent } from './detail/detail-bateau/detail-bateau.component';

const routes: Routes = [
  { path: 'bateaux/:id', component: DetailBateauComponent },
  { path: 'bateaux', component: BateauxComponent },
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: '', redirectTo: '/acceuil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
