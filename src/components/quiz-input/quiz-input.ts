import {Component, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {HomePage} from "../../pages/home/home";
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup} from 'angular2/common';
import {QuizInputService} from "./quiz-input.service";

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
  difficultyList: Array<string> = new Array();
  typeList: Array<string> = new Array();


  homePage: HomePage = new HomePage();

  constructor(private builder: FormBuilder, public quizService: QuizInputService) {
    for (let i = 1; i < 11; i++) {
      this.questionNumbers.push(i);
    }

    this.categoryList.push(
      'Any Category', 'General Knowledge', 'Entertainment: Books', 'Entertainment: Film',
      'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television',
      'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature',
      'Science: Computers', 'Science: Mathematics', 'Mythology', 'Sports', 'Geography',
      'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Entertainment: Comics',
      'Science: Gadgets', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Cartoon & Animations'
    );

    this.difficultyList.push(
      'Any Difficulty', 'Easy', 'Medium', 'Hard'
    );

    this.typeList.push(
      'Any Type', 'Multiple Choice', 'True/False'
    );

    this.quizInputForm = builder.group({
      'questionLimit': '',
      'category': '',
      'difficulty': '',
      'type': '',
    });
  }

  isValid() {
    let data = this.formData;

    for (let key in data) {
      let value = data[key];
      if (!value) {
        return false;
      }
      else {
      }

    }
    return true;
  }

  onSubmit(data) {
    let keyValPairs = []; // used to query quiz API from input service
    this.formData = data; // grab data from input fields

    for (let key in data) {
      let value = data[key];

      if (value) {
        keyValPairs.push({
          key: key,
          value: value
        });
        // console.log('found a value! ', keyValPairs)
      }

      else {
        keyValPairs.push({
          key: key,
          value: ''
        });
        // console.log('found nuthin! ', keyValPairs)
      }

    }

    console.log(data);

    this.quizService.getQuiz(keyValPairs) // send array to GET request in service
      .subscribe(
        result => console.log(result)
      );


  }


}
