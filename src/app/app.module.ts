import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { FooterComponent } from './foot/footer/footer.component';
import { AcceuilComponent } from './menus/acceuil/acceuil.component';
import { AProposComponent } from './menus/a-propos/a-propos.component';
import { ServicesComponent } from './menus/services/services.component';
import { EvenementsComponent } from './menus/evenements/evenements.component';
import { BateauxComponent } from './menus/bateaux/bateaux.component';
import { DetailBateauComponent } from './detail/detail-bateau/detail-bateau.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GalerieImgBateauComponent } from './galerieBateau/galerie-img-bateau/galerie-img-bateau.component';
import { LightboxModule } from 'ngx-lightbox';
import { ContactComponent } from './menus/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AcceuilComponent,
    AProposComponent,
    ServicesComponent,
    EvenementsComponent,
    BateauxComponent,
    DetailBateauComponent,
    GalerieImgBateauComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LightboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
