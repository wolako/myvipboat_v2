import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {

  listEvents = [
    {
      id: 1,
      image: '../assets/images/mariage3.png',
      typeEvent: 'Mariage',
    },
    {
      id: 2,
      image: '../assets/images/12.png',
      typeEvent: 'Anniversaire',
    },
    {
      id: 3,
      image: '../assets/images/gala1.png',
      typeEvent: 'Diner de Gala',
    },
    {
      id: 4,
      image: '../assets/images/15.png',
      typeEvent: 'Conférence',
    },
    {
      id: 5,
      image: '../assets/images/team.png',
      typeEvent: 'Team building',
    },
    {
      id: 6,
      image: '../assets/images/14.png',
      typeEvent: 'Séminaire',
    },
  ];

  getAllListEvents(): any{
    return this.listEvents;
  }
}
