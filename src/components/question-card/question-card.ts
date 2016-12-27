import {Component, Input, ViewChild} from '@angular/core';
import {QuizInputComponent} from "../quiz-input/quiz-input";
import {HomePage} from "../../pages/home/home";
import {Slides} from "ionic-angular";

@Component({
  selector: 'question-card',
  templateUrl: 'question-card.html'
})
export class QuestionCardComponent {
  @Input('isFlipped') flipCard: boolean;
  @ViewChild('slides') slider: Slides;

  constructor() {
  }

}
