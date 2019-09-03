import { Injectable } from '@angular/core';
import {Question} from './question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
randomId = Math.floor(Math.random() * 16);

questions: Question[] = [
    // tslint:disable-next-line:max-line-length
    {id: 0, panneauId: Math.floor(Math.random() * 4), question: 'De quel type est ce panneau ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 1, panneauId: 8, question: 'Je suis en agglomération. Je vois le panneau suivant. qu\indique-t-il ? ', choix1: 'Il faut suivre la direction indiquée', choix2: 'L\indication prend effet à partir du panneau', choix3: 'Ce panneau prend effet à 50m ', choix4: 'Ce panneau prend effet à 150m', bonChoix: 2},
    // tslint:disable-next-line:max-line-length
    {id: 2, panneauId: 15, question: 'Dans cette situation, la signalisation m\'indique : ', choix1: 'une zone à 30km/h', choix2: 'Un rétrécissement de la chaussée venant de droite', choix3: 'Un danger', choix4: 'Obligation de tourner à gauche ou à droite à la prochaine intersection', bonChoix: 4},
    // tslint:disable-next-line:max-line-length
    {id: 3, panneauId: this.randomId, question: 'De quel type est ce panneau 1 ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 4, panneauId: this.randomId, question: 'De quel type est ce panneau 2 ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 2},
    // tslint:disable-next-line:max-line-length
    {id: 5, panneauId: this.randomId, question: 'De quel type est ce panneau 3 ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 3},
    // tslint:disable-next-line:max-line-length
    {id: 6, panneauId: this.randomId, question: 'De quel type est ce panneau 4 ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 4},
    // tslint:disable-next-line:max-line-length
    {id: 7, panneauId: this.randomId, question: 'De quel type est ce panneau 6 ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 1},
    // tslint:disable-next-line:max-line-length
    {id: 8, panneauId: this.randomId, question: 'De quel type est ce panneau015 ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 2},
    // tslint:disable-next-line:max-line-length
    {id: 9, panneauId: this.randomId, question: 'De quel type est ce panneau 8 ?', choix1: 'Panneau de danger', choix2: 'Panneau d\'obligation', choix3: 'Panneau de direction', choix4: 'Panneau d\'interdiction', bonChoix: 3}, ];

constructor() {}

    get(id: any) {
    return this.questions[id];
  }

    count() {
        return this.questions.length;
    }

}
