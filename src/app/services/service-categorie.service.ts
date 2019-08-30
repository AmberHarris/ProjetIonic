import { Injectable } from '@angular/core';
import {Categorie} from './categorie';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategorieService {
  categories: Categorie[] = [
      // tslint:disable-next-line:max-line-length
      {id: 0, title: 'Panneaux de direction', forme: 'Rectangulaire', color: 'Couleurs possible: Blanc, Bleu, Jaune, Vert', position: 'Suivre la direction indiquée', image: 'assets/images/directionCategorie.jpg'},
      // tslint:disable-next-line:max-line-length
      {id: 1, title: 'Panneaux d\'obligation', forme: 'Rond', color: 'Couleur: Bleu', position: 'A partir du panneau, en général', image: 'assets/images/obligationCategorie.jpg'},
      // tslint:disable-next-line:max-line-length
      {id: 2, title: 'Panneaux de danger', forme: 'Triangulaire', color: 'Couleur: Bord rouge / Fond Blanc', position: '50m en agglomération, 150m hors agglomération', image: 'assets/images/dangerCategorie.jpg'},
      // tslint:disable-next-line:max-line-length
      {id: 3, title: 'Panneaux d\'interdiction', forme: 'Rond', color: 'Couleur: Bord rouge / Fond Blanc', position: 'A partir du panneau, en général', image: 'assets/images/interdictionCategorie.jpg'},
      ];

  constructor() { }

  getAllCategories() {
    return this.categories;
  }
  get(id: any) {
    if (id < 0 || id >= this.categories.length) {
      return null;
    }
    return this.categories[id];
  }

}

