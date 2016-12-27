import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {Data} from '../../providers/data';
import {FormBuilder} from "@angular/forms";
export * from "../home/home"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: Slides;

  slideOptions: any;
  submitValid: boolean = true; // will leave as true for now, will set to false later
  questionCardFlipped: boolean = false;
  hasAnswered: boolean = false;
  score: number = 0;

  constructor(public navCtrl?: NavController, public dataService?: Data, public nav?: NavController) {


    this.slideOptions = {
      onlyExternal: true
    };
    this.nav = nav;

  }

  nextSlide() {
    this.questionCardFlipped = false;
    this.slides.slideNext();
    console.log("Current index is", this.slides.getActiveIndex());
  }

  selectAnswer() {
    this.questionCardFlipped = true;
    this.score++;
    this.questionCardFlipped = false;
    this.slides.slideNext();
    console.log("Current index is", this.slides.getActiveIndex());
  }

  restartQuiz() {
    this.score = 0;
    this.slides.slideTo(0, 10);
  }

}
