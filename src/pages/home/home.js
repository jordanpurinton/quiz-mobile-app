var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Data } from '../../providers/data';
export * from "../home/home";
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
    HomePage.prototype.selectAnswer = function () {
        this.questionCardFlipped = true;
    };
    return HomePage;
}());
__decorate([
    ViewChild('slides'),
    __metadata("design:type", Object)
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html'
    }),
    __metadata("design:paramtypes", [NavController, Data, NavController])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map