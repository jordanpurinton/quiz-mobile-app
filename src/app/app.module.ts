import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { QuizApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionCardComponent } from '../components/question-card/question-card';
import { Data } from '../providers/data';
import {QuizInputComponent} from "../components/quiz-input/quiz-input";
import {QuizInputService} from "../providers/quiz-input.service";
import {qApi} from "../providers/qapi";
import {BrowserModule} from "@angular/platform-browser";
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    QuizApp,
    HomePage,
    QuestionCardComponent,
    QuizInputComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    IonicModule.forRoot(QuizApp),
    BrowserModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    QuizApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data, QuizInputService, qApi]
})
export class AppModule {}
