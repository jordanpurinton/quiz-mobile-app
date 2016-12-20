import {Component, Input, ViewChild} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {HomePage} from "../../pages/home/home";

@Component({
  selector: 'quiz-input',
  templateUrl: 'quiz-input.html'
})
export class QuizInputComponent {
  @ViewChild('slides') slides: any;
  quizInputForm: FormGroup;
  private formData: any;
  questionNumbers: Array<number> = new Array();
  categoryList: {}
  homePage: HomePage = new HomePage();

  constructor(private builder: FormBuilder) {
    for (let i = 1; i < 51; i++) {
      this.questionNumbers.push(i);
    }

    this.quizInputForm = builder.group({
      'questionLimit': '',
      'category': '',
      'difficulty': '',
      'type': '',
      'encoding': ''
    })
  }

  public onSubmit(data) {
    this.formData = data;
    console.log('Form data is ', data);
  }




}
