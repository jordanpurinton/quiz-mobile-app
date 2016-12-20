var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Pipe } from '@angular/core';
import { HomePage } from "../../pages/home/home";
var keyValueFilterPipe = (function () {
    function keyValueFilterPipe() {
    }
    keyValueFilterPipe.prototype.transform = function (value, args) {
        if (args === void 0) { args = null; }
        return Object.keys(value).map(function (key) {
            var pair = {};
            var k = 'key';
            var v = 'value';
            pair[k] = key;
            pair[v] = value[key];
            return pair;
        });
    };
    return keyValueFilterPipe;
}());
keyValueFilterPipe = __decorate([
    Component({
        selector: 'quiz-input',
        templateUrl: 'quiz-input.html'
    }),
    Pipe({
        name: 'keyValueFilter'
    }),
    __metadata("design:paramtypes", [])
], keyValueFilterPipe);
export { keyValueFilterPipe };
var QuizInputComponent = (function () {
    function QuizInputComponent(builder) {
        this.builder = builder;
        this.questionNumbers = new Array();
        this.categoryList = {
            Daario: "Test",
            Victarion: "Test",
            Quentyn: "Test"
        };
        this.homePage = new HomePage();
        for (var i = 1; i < 51; i++) {
            this.questionNumbers.push(i);
        }
        this.quizInputForm = builder.group({
            'questionLimit': '',
            'category': '',
            'difficulty': '',
            'type': '',
            'encoding': ''
        });
    }
    QuizInputComponent.prototype.onSubmit = function (data) {
        this.formData = data;
        console.log('Form data is ', data);
    };
    return QuizInputComponent;
}());
export { QuizInputComponent };
__decorate([
    ViewChild('slides'),
    __metadata("design:type", Object)
], QuizInputComponent.prototype, "slides", void 0);
//# sourceMappingURL=quiz-input.js.map