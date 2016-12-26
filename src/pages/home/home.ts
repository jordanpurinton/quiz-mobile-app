import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {Data} from '../../providers/data';
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

  constructor(public navCtrl?: NavController, public dataService?: Data, public nav?: NavController) {


    this.slideOptions = {
      onlyExternal: true
    };
    this.nav = nav;

  }

  nextSlide() {
    this.slides.slideNext();
    console.log("Current index is", this.slides.getActiveIndex());
    console.log(localStorage.getItem('data'))
  }

  ionViewDidLoad() {
  }

  selectAnswer() {
    this.questionCardFlipped = true;
  }

}
