"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var home_1 = require("./home");
var QuizInputComponent = (function () {
    function QuizInputComponent(builder, quizService) {
        this.builder = builder;
        this.quizService = quizService;
        this.questionNumbers = new Array();
        this.categoryList = new Array();
        this.difficultyList = new Array();
        this.typeList = new Array();
        this.homePage = new home_1.HomePage();
        for (var i = 1; i < 11; i++) {
            this.questionNumbers.push(i);
        }
        this.categoryList.push('Any Category', 'General Knowledge', 'Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature', 'Science: Computers', 'Science: Mathematics', 'Mythology', 'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Entertainment: Comics', 'Science: Gadgets', 'Entertainment: Japanese Anime & Manga', 'Entertainment: Cartoon & Animations');
        this.difficultyList.push('Any Difficulty', 'Easy', 'Medium', 'Hard');
        this.typeList.push('Any Type', 'Multiple Choice', 'True/False');
        this.quizInputForm = builder.group({
            'questionLimit': '',
            'category': '',
            'difficulty': '',
            'type': '',
        });
    }
    QuizInputComponent.prototype.isValid = function () {
        var data = this.formData;
        for (var key in data) {
            var value = data[key];
            if (!value) {
                return false;
            }
            else {
            }
        }
        return true;
    };
    QuizInputComponent.prototype.onSubmit = function (data) {
        var keyValPairs = []; // used to query quiz API from input service
        this.formData = data; // grab data from input fields
        for (var key in data) {
            var value = data[key];
            if (value) {
                keyValPairs.push({
                    key: key,
                    value: value
                });
            }
            else {
                keyValPairs.push({
                    key: key,
                    value: ''
                });
            }
        }
        // console.log(data);
        this.quizService.getQuiz(keyValPairs) // send array to GET request in service
            .subscribe(function (data) {
            localStorage.setItem("data", JSON.stringify(data));
            console.log(data.results);
            // console.log(data.response_code);
        });
    };
    __decorate([
        core_1.ViewChild('slides')
    ], QuizInputComponent.prototype, "slides", void 0);
    QuizInputComponent = __decorate([
        core_1.Component({
            selector: 'quiz-input',
            templateUrl: 'quiz-input.html',
        })
    ], QuizInputComponent);
    return QuizInputComponent;
}());
exports.QuizInputComponent = QuizInputComponent;
