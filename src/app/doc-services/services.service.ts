import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  listServices = [
    {
      id: 1,
      image: '../assets/images/16.png',
      typeService: 'Location de bateau',
    },
    {
      id: 2,
      image: '../assets/images/resto1.png',
      typeService: 'Restauration',
    },
    {
      id: 3,
      image: '../assets/images/planevt2.png',
      typeService: "Planification d'événement",
    },
    {
      id: 4,
      image: '../assets/images/coordevt.png',
      typeService: "Coordination d'événement",
    },
    {
      id: 5,
      image: '../assets/images/coordact.png',
      typeService: "Divertissement et Activité",
    },
  ];

  getAllListServices(): any{
    return this.listServices;
  }
}
