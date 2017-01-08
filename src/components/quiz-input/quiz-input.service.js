"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
require('rxjs/Rx'); // observable 3rd party library angular 2 uses
var core_1 = require("@angular/core");
var QuizInputService = (function () {
    function QuizInputService(http) {
        this.http = http;
    }
    QuizInputService.prototype.getQuiz = function (data) {
        var apiQuery = [];
        var questionNum = 0;
        var category = "";
        var type = "";
        var difficulty = "";
        var APIURL = 'https://opentdb.com/api.php?amount=';
        // add values from JSON
        for (var key in data) {
            var keyVal = JSON.stringify(data[key]);
            if (keyVal.includes('questionLimit')) {
                var value = keyVal.substring(32, keyVal.length - 2);
                apiQuery.push(+value);
            }
            else if (keyVal.includes('category')) {
                var value = keyVal.substring(27, keyVal.length - 2);
                apiQuery.push(value);
            }
            else if (keyVal.includes('difficulty')) {
                var value = keyVal.substring(29, keyVal.length - 2);
                apiQuery.push(value);
            }
            else if (keyVal.includes('type')) {
                var value = keyVal.substring(23, keyVal.length - 2);
                apiQuery.push(value);
            }
        }
        // check each entry in the API query, adds to URL if relevant
        for (var i = 0; i < 4; i++) {
            if (apiQuery[i] != "") {
                if (typeof apiQuery[i] == "number") {
                    questionNum = apiQuery[i];
                }
                else if (apiQuery[i] == "Hard" || apiQuery[i] == "Medium" || apiQuery[i] == "Easy") {
                    difficulty = "&difficulty=" + apiQuery[i].toLowerCase();
                }
                else if (apiQuery[i] == "Multiple Choice" || apiQuery[i] == "True/False") {
                    if (apiQuery[i] == "Multiple Choice") {
                        type = "&type=" + "multiple";
                    }
                    else {
                        type = "&type=" + "boolean";
                    }
                }
            }
        }
        return this.http.get(APIURL + questionNum + difficulty + type)
            .map(function (response) { return response.json(); });
    };
    QuizInputService = __decorate([
        core_1.Injectable()
    ], QuizInputService);
    return QuizInputService;
}());
exports.QuizInputService = QuizInputService;
