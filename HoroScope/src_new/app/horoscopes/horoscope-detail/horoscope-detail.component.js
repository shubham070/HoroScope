"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var horoscopes_1 = require("../horoscopes");
require("rxjs/add/operator/map");
var HoroscopeDetailComponent = (function () {
    function HoroscopeDetailComponent(servicecaller) {
        this.servicecaller = servicecaller;
    }
    HoroscopeDetailComponent.prototype.ngOnInit = function () {
    };
    HoroscopeDetailComponent.prototype.getDailyPredictions = function (name) {
        var _this = this;
        this.servicecaller.get("http://www.horoscopewebapi.somee.com/Horoscope/GetDailyPredictions/" + name).map(function (response) { return response.json(); }).subscribe(function (data) { return _this.Daily = data; });
        this.monthlySelected = false;
        this.dailySelected = true;
        this.weeklySelected = false;
    };
    HoroscopeDetailComponent.prototype.getMonthlyPredictions = function (name) {
        var _this = this;
        this.servicecaller.get("http://www.horoscopewebapi.somee.com/Horoscope/GetMonthlyPredictions/" + name).map(function (response) { return response.json(); }).subscribe(function (data) { return _this.Monthly = data; });
        this.monthlySelected = true;
        this.dailySelected = false;
        this.weeklySelected = false;
    };
    HoroscopeDetailComponent.prototype.getWeeklyPredictions = function (name) {
        var _this = this;
        this.servicecaller.get("http://www.horoscopewebapi.somee.com/Horoscope/GetWeeklyPredictions/" + name).map(function (response) { return response.json(); }).subscribe(function (data) { return _this.Weekly = data; });
        this.monthlySelected = false;
        this.dailySelected = false;
        this.weeklySelected = true;
    };
    return HoroscopeDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", horoscopes_1.Horoscope)
], HoroscopeDetailComponent.prototype, "horoscopeSelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HoroscopeDetailComponent.prototype, "monthlySelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HoroscopeDetailComponent.prototype, "dailySelected", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], HoroscopeDetailComponent.prototype, "weeklySelected", void 0);
HoroscopeDetailComponent = __decorate([
    core_1.Component({
        selector: 'horoscope-detail',
        templateUrl: './horoscope-detail.component.html',
        styleUrls: ['./horoscope-detail.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], HoroscopeDetailComponent);
exports.HoroscopeDetailComponent = HoroscopeDetailComponent;
//# sourceMappingURL=horoscope-detail.component.js.map