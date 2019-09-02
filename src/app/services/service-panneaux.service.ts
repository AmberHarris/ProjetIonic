import { Injectable } from '@angular/core';
import { Panneaux } from './panneaux';

@Injectable({
  providedIn: 'root'
})
export class ServicePanneauxService {
  panneaux: Panneaux[] = [
    {
      id: 0,
      title: 'Virage',
      image: 'assets/images/danger1.jpg',
      categorie: 2,
      description: 'Signale un virage à droite',
    },
    {
      id: 1,
      title: 'Sol glissant',
      image: 'assets/images/danger2.jpg',
      categorie: 2,
      description: 'Chaussée particulièrement glissante',
    },
    {
      id: 2,
      title: 'Berge',
      image: 'assets/images/danger3.jpg',
      categorie: 2,
      description: 'Débouché sur un quai ou une berge',
    },
    {
      id: 3,
      title: 'Animaux',
      image: 'assets/images/danger4.jpg',
      categorie: 2,
      description: 'Passage d\'animaux domestiques',
    },
    {
      id: 4,
      title: 'Route principale',
      image: 'assets/images/direction1.jpg',
      categorie: 0,
      description: 'Panneau de position comportant une indication de distance. Le fond vert est utilisé pour indiquer un itinéraire principal reliant de grandes agglomérations importantes.',
    },
    {
      id: 5,
      title: 'Direction temporaire',
      image: 'assets/images/direction2.jpg',
      categorie: 0,
      description: 'Panneau de position comportant une indication de distance, Le fond jaune est utilisé lorsqu’un itinéraire temporaire est mis en place.',
    },
    {
      id: 6,
      title: 'Routes secondaires',
      image: 'assets/images/direction3.jpg',
      categorie: 0,
      description: 'Panneau de position comportant une indication de distance. Le fond blanc est utilisé pour mentionner des itinéraires secondaires ainsi que les localités les plus proches.',
    },
    {
      id: 7,
      title: 'Grands axes',
      image: 'assets/images/direction4.jpg',
      categorie: 0,
      description: 'Panneau de position comportant une indication de distance. Le fond bleu est utilisé pour indiquer un itinéraire empruntant une autoroute.',
    },
    {
      id: 8,
      title: 'Dépasser',
      image: 'assets/images/interdiction1.jpg',
      categorie: 3,
      description: 'Interdiction de dépasser tous les véhicules à moteur autres que ceux à deux roues sans side-car.',
    },
    {
      id: 9,
      title: 'Demi-tour',
      image: 'assets/images/interdiction2.jpg',
      categorie: 3,
      description: 'Interdiction de faire demi-tour sur la route suivie jusqu\'à la prochaine intersection.',
    },
    {
      id: 10,
      title: 'Stationnement',
      image: 'assets/images/interdiction3.jpg',
      categorie: 3,
      description: 'Stationnement interdit du 16 à la fin du mois.',
    },
    {
      id: 11,
      title: 'Véhicules spécifiques',
      image: 'assets/images/interdiction4.jpg',
      categorie: 3,
      description: 'Accès interdit aux véhicules à traction animale.',
    },
    {
      id: 12,
      title: 'Obligation de contourner',
      image: 'assets/images/obligation1.jpg',
      categorie: 1,
      description: 'Contournement obligatoire par la droite.',
    },
    {
      id: 13,
      title: 'Chaîne neige obligatoire',
      image: 'assets/images/obligation2.jpg',
      categorie: 1,
      description: 'Chaînes à neige obligatoires sur au moins deux roues motrices',
    },
    {
      id: 14,
      title: 'Obligation piétons',
      image: 'assets/images/obligation3.jpg',
      categorie: 1,
      description: 'Fin de chemin obligatoire pour piétons.',
    },
    {
      id: 15,
      title: 'Obligation de direction',
      image: 'assets/images/obligation4.jpg',
      categorie: 1,
      description: 'Directions obligatoires à la prochaine intersection : à droite ou à gauche.',
    },
  ];
  private newPanneau: Panneaux;

  constructor() {
  }

  getAllPanneaux() {
    return this.panneaux;
  }

  get(id: any) {
    if (id < 0 || id >= this.panneaux.length) {
      return null;
    }
    return this.panneaux[id];
  }

  filterByCategorie(categorieId: any) {
    if (this.panneaux.filter(categorieId)) {
      this.newPanneau = this.panneaux[categorieId];
      return this.newPanneau;
    }
    return null;
  }
}
