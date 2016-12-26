"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
__export(require("../home/home"));
var HomePage = (function () {
    function HomePage(navCtrl, dataService, nav) {
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.nav = nav;
        this.submitValid = true; // will leave as true for now, will set to false later
        this.questionCardFlipped = false;
        this.slideOptions = {
            onlyExternal: true
        };
        this.nav = nav;
    }
    HomePage.prototype.nextSlide = function () {
        this.slides.slideNext();
    };
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.onSlideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log("Current index is", currentIndex);
    };
    HomePage.prototype.selectAnswer = function () {
        this.questionCardFlipped = true;
    };
    __decorate([
        core_1.ViewChild('slides')
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        core_1.Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        })
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
