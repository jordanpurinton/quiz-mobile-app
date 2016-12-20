import {Component, Input, ViewChild, PipeTransform, Pipe} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import {HomePage} from "../../pages/home/home";
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup} from 'angular2/common';

@Component({
  selector: 'quiz-input',
  templateUrl: 'quiz-input.html',
})


export class QuizInputComponent {
  @ViewChild('slides') slides: any;
  quizInputForm: FormGroup;
  private formData: any;
  questionNumbers: Array<number> = new Array();
  categoryList: Array<string> = new Array();
  myDict = new Map();


  homePage: HomePage = new HomePage();

  constructor(private builder: FormBuilder) {
    for (let i = 1; i < 51; i++) {
      this.questionNumbers.push(i);
    }

    this.categoryList.push(
      'Any Category', 'General Knowledge', 'Entertainment: Books', 'Entertainment: Film',
      'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television',
      'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature',
      'Science: Computers', 'Science: Mathematics', 'Mythology', 'Sports', 'Geography',
      'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Entertainment: Comics',
      'Science: Gadgets', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Cartoon & Animations')

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
