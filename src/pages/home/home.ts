import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('slides') slides: any;

  slideOptions: any;
  questionCardFlipped: boolean = false;

  constructor(public navCtrl: NavController, public dataService: Data) {

    this.slideOptions = {
      onlyExternal: true
    };

  }

  ionViewDidLoad() {

  }

  selectAnswer(){
    this.questionCardFlipped = true;
  }

}
