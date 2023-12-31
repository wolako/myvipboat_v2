import { Component, OnInit } from '@angular/core';
import { AProposComponent } from 'src/app/menus/a-propos/a-propos.component';
import { AcceuilComponent } from 'src/app/menus/acceuil/acceuil.component';
import { BateauxComponent } from 'src/app/menus/bateaux/bateaux.component';
import { EvenementsComponent } from 'src/app/menus/evenements/evenements.component';
import { ServicesComponent } from 'src/app/menus/services/services.component';
import * as M from 'materialize-css';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  navItems = [
    {
      path: '/acceuil', Component: AcceuilComponent,
      name: 'Acceuil'
    },
    {
      path: '/a-propos', Component: AProposComponent,
      name: 'A propos'
    },
    {
      path: '/services', Component: ServicesComponent,
      name: 'Services'
    },
    {
      path: '/evenements', Component: EvenementsComponent,
      name: 'Evénements'
    },
    {
      path: '/bateaux', Component: BateauxComponent,
      name: 'Bateaux'
    }
  ];

  
  constructor() { }

  ngOnInit(): void {

    // M.Sidenav.init(this.sidenav.nativeElement);

    const elems = document.querySelectorAll('.sidenav');
    const inst = M.Sidenav.init(elems);

    // const links = document.querySelectorAll('sidenav li a');
    // links.forEach(link =>{
    //   link.addEventListener('click', () => {
    //     const instance = M.Sidenav.getInstance(elems[0]);
    //     instance.close();
    //   });
    // });
  }

  isMobileSidenavOpen = false;

  toggleMobileSidenav() {
    this.isMobileSidenavOpen = !this.isMobileSidenavOpen;
  }

}

