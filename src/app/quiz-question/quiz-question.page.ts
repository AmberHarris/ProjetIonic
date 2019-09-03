import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Question} from '../services/question';
import {QuestionService} from '../services/question.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-quiz-question',
  templateUrl: './quiz-question.page.html',
  styleUrls: ['./quiz-question.page.scss'],
})
export class QuizQuestionPage implements OnInit {
  question = null;
  selected = 0;
  score = 0;

  constructor(private service: QuestionService, private storage: Storage, private router: Router) {
    this.question = this.service.get(0);
  }

  ngOnInit() {
  }
  onChange($event) {
    console.log($event.detail.value);
    this.selected = $event.detail.value;
  }

  onValidate() {
    if (Number(this.selected) === this.question.bonChoix) {
      console.log('BonChoix')
      this.score++;
    }
    if (this.question.id < (this.service.count() - 1)) {
      this.question = this.service.get(this.question.id + 1);
      console.log('Question Suivante');
    } else {
      console.log('plus de question');
      this.storage.set('lastQuiz', this.score);
      console.log(this.score);
      this.router.navigate(['quiz-result']);
    }
  }

}
