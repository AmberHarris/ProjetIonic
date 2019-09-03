import { Component, OnInit } from '@angular/core';
import { QuestionService} from '../services/question.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.page.html',
  styleUrls: ['./quiz-result.page.scss'],
})
export class QuizResultPage implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }



}
