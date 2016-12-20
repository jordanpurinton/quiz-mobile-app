var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { QuizApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuestionCardComponent } from '../components/question-card/question-card';
import { Data } from '../providers/data';
import { QuizInputComponent } from "../components/quiz-input/quiz-input";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            QuizApp,
            HomePage,
            QuestionCardComponent,
            QuizInputComponent
        ],
        imports: [
            IonicModule.forRoot(QuizApp)
        ],
        bootstrap: [IonicApp],
        entryComponents: [
            QuizApp,
            HomePage
        ],
        providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, Data]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map