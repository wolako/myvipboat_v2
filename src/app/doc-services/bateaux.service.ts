import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BateauxService {

  listBateaux = [
    {
      id: 1,
      image : '../assets/images/2.png',
      typeBateaux: 'Méga yacth',
      marque : 'kismet',
      nbrPersonnes: 80,
      prixJour: '15000\u20AC',
      equipements: 'Jet-ski',
      infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia',
    },
    {
      id: 2,
      image : '../assets/images/b5.png',
      typeBateaux: 'Bateau à voile',
      marque : 'kismet',
      nbrPersonnes: 10,
      prixJour: '10000\u20AC',
      equipements: 'Jet-ski',
      infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia',
    },
    { 
      id: 3,
      image : '../assets/images/b9.png',
      typeBateaux: 'yacth',
      marque : 'kismet',
      nbrPersonnes: 5,
      prixJour: '5000\u20AC',
      equipements: 'Jet-ski',
      infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia',
    },
    {
      id: 4,
      image : '../assets/images/b12.png',
      typeBateaux: 'Peniche',
      marque : 'kismet',
      nbrPersonnes: 20,
      prixJour: '12000\u20AC',
      equipements: 'Jet-ski',
      infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia',
    },
    {
      id: 5,
      image : '../assets/images/b11.png',
      typeBateaux: 'Bateux à voile',
      marque : 'kismet',
      nbrPersonnes: 30,
      prixJour: '15000\u20AC',
      equipements: 'Jet-ski',
      infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia',
    },
    {
      id: 6,
      image: '../assets/images/b8.png',
      images: '../assets/images/2.png',
      images1: '../assets/images/b11.png', 
      images2: '../assets/images/b9.png',
      typeBateaux: 'yacth',
      marque : 'kismet',
      nbrPersonnes: 20,
      prixJour: '100000\u20AC',
      equipements: 'Jet-ski',
      infos: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor mollitia',
    },

  ];

  getAllListBateaux(): any {
    return this.listBateaux;
  }

  getBateauxById(bateauxId: number): any{
    return this.listBateaux.find(bateau => bateau.id == bateauxId);
  }
  
}
