import {Component, ViewChild} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import {HomePage} from "../../pages/home/home";
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup} from 'angular2/common';
import {QuizInputService} from "./quiz-input.service";
import {Slides, AlertController, ToastController} from "ionic-angular";
import {qApi} from "../../providers/qapi";

@Component({
  selector: 'quiz-input',
  templateUrl: 'quiz-input.html',
})


export class QuizInputComponent {
  @ViewChild('slides') slides: Slides;
  quizInputForm: FormGroup;
  private formData: any;
  questionNumbers: Array<number> = new Array();
  categoryList: Array<string> = new Array();
  difficultyList: Array<string> = new Array();
  typeList: Array<string> = new Array();
  questions: any;


  constructor(private builder: FormBuilder, public quizService: QuizInputService, public homePage: HomePage, public qapi: qApi,
  public toastControl: ToastController) {
    for (let i = 1; i < 11; i++) {
      this.questionNumbers.push(i);
    }

    // this.categoryList.push(
    //   'Any Category', 'General Knowledge', 'Entertainment: Books', 'Entertainment: Film',
    //   'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television',
    //   'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature',
    //   'Science: Computers', 'Science: Mathematics', 'Mythology', 'Sports', 'Geography',
    //   'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Entertainment: Comics',
    //   'Science: Gadgets', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Cartoon & Animations'
    // );

    this.categoryList.push(
      'Any Category', 'General Knowledge', 'Music', 'Television',
      'Sports', 'Science & Nature', 'History', 'Politics', 'Art', 'Celebrities',
      'Vehicles'
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
      }

      else {
        keyValPairs.push({
          key: key,
          value: ''
        });
      }

    }
    if(this.isValid()) {
      this.quizService.getQuiz(keyValPairs) // send array to GET request in service
        .subscribe(
          data => {
            this.questions = ''; // clear questions
            if (data.results != '') {
              // console.log('before', data.results);
              this.qapi.setQ(data.results);
              this.questions = data.results;
              // console.log('after', this.questions);
              this.homePage.nextSlide();
              this.quizInputForm.reset();
            }
            // else { // API response is null or user didn't enter quiz input correctly
            //   let toast = this.toastControl.create({
            //     message: 'Uh oh! Something went wrong. Please enter a different quiz input. (maybe try a more generic one?)',
            //     duration: 7000,
            //     position: 'top'
            //   });
            //   toast.present();
            // }
          },
          error => {
            console.log('Something went wrong. Could not load trivia data.');
            console.log(error);
          }
        );
    }
  }

}
