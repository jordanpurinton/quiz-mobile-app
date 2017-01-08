import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {Data} from '../../providers/data';
import {FormBuilder} from "@angular/forms";
import {qApi} from "../../providers/qapi";
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

  constructor(public navCtrl?: NavController, public dataService?: Data, public nav?: NavController, public qapi?:qApi) {


    this.slideOptions = {
      onlyExternal: true
    };
    this.nav = nav;

  }

  nextSlide() {
    this.questions = this.qapi.q;
    this.questionCardFlipped = false;
    this.slides.slideNext();
    console.log("Current index is", this.slides.getActiveIndex());
  }

  selectAnswer(answer, question) {
    this.questionCardFlipped = true;
    this.score++;
    console.log("Current index is", this.slides.getActiveIndex());
    this.hasAnswered = true;
    this.selected = true;
    this.questionCardFlipped = true;

    if(answer.correct){
      this.score++;
    }
    setTimeout(() => {
      this.hasAnswered = false;
      this.slides.slideNext();
      this.selected = false;
      this.questionCardFlipped = false;
    }, 3000);
  }

  restartQuiz() {
    this.score = 0;
    this.slides.slideTo(0, 10);
  }

}
