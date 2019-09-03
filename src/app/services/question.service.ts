import { Injectable } from '@angular/core';
import {Question} from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
randomId = Math.floor(Math.random() * 16);

questions: Question[] = [
    // tslint:disable-next-line:max-line-length
    {id: 0, panneauId: Math.floor(Math.random() * 4), question: 'De quel type est ce panneau ?', choix0: 'Panneau de danger', choix1: 'Panneau d\'obligation', choix2: 'Panneau de direction', choix3: 'Panneau d\'interdiction', bonChoix: 0},
    // tslint:disable-next-line:max-line-length
    {id: 1, panneauId: 8, question: 'Je suis en agglomération. Je vois le panneau suivant. qu\'indique-t-il ? ', choix0: 'Il faut suivre la direction indiquée', choix1: 'L\indication prend effet à partir du panneau', choix2: 'Ce panneau prend effet à 50m ', choix3: 'Ce panneau prend effet à 150m', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 2, panneauId: 15, question: 'Dans cette situation, la signalisation m\'indique : ', choix0: 'une zone à 30km/h', choix1: 'Un rétrécissement de la chaussée venant de droite', choix2: 'Un danger', choix3: 'Obligation de tourner à gauche ou à droite à la prochaine intersection', bonChoix: 3},
    // tslint:disable-next-line:max-line-length
    {id: 3, panneauId: 13, question: 'Ce panneau indique : ', choix0: 'Contournement obligatoire par la droite', choix1: 'Chaînes à neige obligatoires sur au moins deux roues motrices', choix2: 'Stationnement interdit du 16 à la fin du mois', choix3: 'Interdiction de faire demi-tour', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 4, panneauId: 11, question: 'Qu\'indique ce panneau ?', choix0: 'Présignalisation d’une impasse.', choix1: 'Accès interdit aux véhicules à traction animale.', choix2: 'Directions obligatoires: Tout droit ou à gauche', choix3: 'Ce panneau n\'existe pas ', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 5, panneauId: 10, question: 'Je peux stationner ici le 17 du mois', choix0: 'Vrai', choix1: 'Faux', choix2: 'Je ne sais pas', choix3: 'Ce panneau n\'existe pas ', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 6, panneauId: 2, question: 'Quel est la catégorie de ce panneau ? ', choix0: 'Panneau de danger', choix1: 'Panneau d\'obligation', choix2: 'Panneau de direction', choix3: 'Panneau d\'interdiction', bonChoix: 0},
    // tslint:disable-next-line:max-line-length
    {id: 7, panneauId: 7, question: 'Qu\'indique ce panneau ?', choix0: 'Un panneau de danger, signalant des animaux domestiques', choix1: 'Un itinéraire empruntant une autoroute', choix2: 'L\'emprunt d\'une route départementale', choix3: 'Un itinéraire sur un grand axe national', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 8, panneauId: 5, question: 'De quel type est ce panneau ?', choix0: 'Panneau de danger', choix1: 'Panneau d\'obligation', choix2: 'Panneau de direction, temporaire', choix3: 'Panneau d\'interdiction', bonChoix: 2},
    // tslint:disable-next-line:max-line-length
    {id: 9, panneauId: 9, question: 'Ce panneau indique : ', choix0: 'Contournement obligatoire par la droite', choix1: 'Chaînes à neige obligatoires sur au moins deux roues motrices', choix2: 'Stationnement interdit du 16 à la fin du mois', choix3: 'Interdiction de faire demi-tour', bonChoix: 3}, ];

constructor() {}

    get(id: any) {
    return this.questions[id];
  }

    count() {
        return this.questions.length;
    }


}
