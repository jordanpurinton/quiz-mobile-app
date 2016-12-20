import { Component, Input } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {ActionSheet} from "ionic-native";
import {ActionSheetController} from "ionic-angular";

@Component({
  selector: 'quiz-input',
  templateUrl: 'quiz-input.html'
})
export class QuizInputComponent {
  quizInputForm: FormGroup;
  private formData: any;
  questionNumbers: Array<number>;

  constructor(private builder: FormBuilder) {
    this.questionNumbers = [1,2,3,4,5,6,7,8,9,10];
    this.quizInputForm = builder.group({
      'questionLimit': '',
      'category': '',
      'difficulty': '',
      'type': '',
      'encoding': ''
    })
  }

  onSubmit(data) {
    console.log('Form data is ', data);
    this.formData = data;
  }



}
