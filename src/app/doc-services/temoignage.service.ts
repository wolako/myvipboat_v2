import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemoignageService {

  temoignages = [
    {
      id: 1,
      noms : 'Pierre Dupon',
      titre: 'CEO de Lorem',
      commentaire : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta officia ducimus doloribus veniam, quae dolores ut praesentium debitis laudantium iusto perferendis omnis consectetur!',
    },
    {
      id: 2,
      noms : 'Diane Fato',
      titre: 'Secretaire général',
      commentaire : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam saepe deserunt aperiam sunt nam a, modi exercitationem explicabo sint nisi distinctio obcaecati?',
    },
    {
      id: 3,
      noms : 'Sandra Rofo',
      titre: 'Community Manager',
      commentaire : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. obcaecati laboriosam architecto, molestias itaque officiis! Blanditiis vitae quae explicabo dignissimos dolorum vero odio quaerat!',
    },
    {
      id: 4,
      noms : 'Jean Luc',
      titre: 'DSI chez Git',
      commentaire : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum eum provident dicta sit, ipsa iste neque animi cum sequi?',
    },
  ];
  getAllTemoignages(): any{
    return this.temoignages;
  }  

}
