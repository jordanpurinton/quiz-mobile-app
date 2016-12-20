import { Component } from '@angular/core';

/*
  Generated class for the QuestionCard component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'question-card',
  templateUrl: 'question-card.html'
})
export class QuestionCardComponent {

  text: string;

  constructor() {
    console.log('Hello QuestionCard Component');
    this.text = 'Hello World';
  }

}
