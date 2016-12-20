import { Component, ViewChild } from '@angular/core';
import {NavController} from 'ionic-angular';
import { Data } from '../../providers/data';
export * from "../home/home"

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: any;

  slideOptions: any;
  submitValid: boolean = true; // will leave as true for now, will set to false later
  questionCardFlipped: boolean = false;

  constructor(public navCtrl?: NavController, public dataService?: Data, public nav?: NavController) {

    this.slideOptions = {
      onlyExternal: true
    };
    this.nav = nav;

  }

  nextSlide(){
      this.slides.slideNext();
  }

  ionViewDidLoad() {

  }

  selectAnswer(){
    this.questionCardFlipped = true;
  }

  }
