import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {Data} from '../../providers/data';
import {FormBuilder} from "@angular/forms";
import {qApi} from "../../providers/qapi";
import {QuizInputComponent} from "../../components/quiz-input/quiz-input";
import {isUndefined} from "ionic-angular/umd/util/util";
export * from "../home/home"


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: Slides;
  questions: any;
  slideOptions: any;
  submitValid: boolean = true; // will leave as true for now, will set to false later
  questionCardFlipped: boolean = false;
  hasAnswered: boolean = false;
  score: number = 0;
  selected: boolean = false;
  isCorrect: boolean = false;

  constructor(public navCtrl?: NavController, public dataService?: Data, public nav?: NavController, public qapi?: qApi) {


    this.slideOptions = {
      onlyExternal: true,
    };
    this.nav = nav;

  }

  nextSlide() {
    let currentIndex = this.slides.getActiveIndex();
    this.questions = this.qapi.question;
    if(typeof this.questions[currentIndex] != 'undefined') { // make sure we're not on last question
      this.questions[currentIndex].incorrect_answers =           // hacky way of combining correct and incorrect answers and then shuffling them
        this.questions[currentIndex].incorrect_answers.concat(this.questions[currentIndex].correct_answer);
      this.shuffle(this.questions[currentIndex].incorrect_answers);
    }
    this.questionCardFlipped = false;
    this.slides.slideNext();
    // console.log("Current index is", this.slides.getActiveIndex());
  }

  selectAnswer(answer, question) {
    this.questionCardFlipped = true;
    // console.log("Current index is", this.slides.getActiveIndex());
    this.hasAnswered = true;
    this.selected = true;

    if (answer == this.htmlDecode(question.correct_answer)) {
      this.score++;
      this.isCorrect = true;
    }
    setTimeout(() => {
      this.hasAnswered = false;
      this.nextSlide();
      this.selected = false;
      this.isCorrect = false;
      this.questionCardFlipped = false;
    }, 3000);
  }

  htmlDecode(input) {
    let e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  shuffle(a) {
  var j, x, i;
  for (i = a.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = a[i - 1];
    a[i - 1] = a[j];
    a[j] = x;
  }
}

  restartQuiz() {
    this.score = 0;
    this.slides.slideTo(0, 10);
  }

}
