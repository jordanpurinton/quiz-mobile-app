import { Component, Input } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from "@angular/forms";
import {ActionSheet} from "ionic-native";
import {ActionSheetController} from "ionic-angular";

@Component({
  selector: 'quiz-input',
  templateUrl: 'quiz-input.html'
})
export class QuizInputComponent {
  quizInputForm: FormGroup;

  constructor(public actionSheetCtrl: ActionSheetController) {
  }

  presentActionSheet(category) {
    let actionSheet = this.actionSheetCtrl.create({

        title: 'Select one of the following:',
      buttons: [
        {
          text: 'Category 1',
          handler: () => {
            console.log('Category 1 clicked');
          }
        }, {
          text: 'Category 2',
          handler: () => {
            console.log('Category 2 clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

    ngOnInit() {
    this.quizInputForm = new FormGroup({
      questionNumber: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      difficulty: new FormControl(null, Validators.required),
      type: new FormControl(null, Validators.required),
      encoding: new FormControl(null, Validators.required)
    });
  }

}
