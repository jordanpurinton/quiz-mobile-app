import { Component, Input } from '@angular/core';

@Component({
  selector: 'question-card',
  templateUrl: 'question-card.html'
})
export class QuestionCardComponent {
  @Input('isFlipped') flipCard: boolean;

  constructor() {
  }

}
