import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { QuizApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionCardComponent } from '../components/question-card/question-card';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    QuizApp,
    HomePage,
    QuestionCardComponent
  ],
  imports: [
    IonicModule.forRoot(QuizApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    QuizApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Data]
})
export class AppModule {}
