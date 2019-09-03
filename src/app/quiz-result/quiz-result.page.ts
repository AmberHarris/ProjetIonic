import { Component, OnInit } from '@angular/core';
import { QuestionService} from '../services/question.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.page.html',
  styleUrls: ['./quiz-result.page.scss'],
})
export class QuizResultPage implements OnInit {
  score = null;

  constructor(private route: ActivatedRoute, private router: Router, private storage: Storage) {
    this.storage.get('lastQuiz').then((val) => {
      this.score = val;

    });
  }

  ngOnInit() {
  }



}
