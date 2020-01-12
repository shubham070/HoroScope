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
var horoscopes_1 = require("../../horoscopes");
var HoroscopeItemComponent = (function () {
    function HoroscopeItemComponent() {
    }
    HoroscopeItemComponent.prototype.ngOnInit = function () {
    };
    return HoroscopeItemComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", horoscopes_1.Horoscope)
], HoroscopeItemComponent.prototype, "horoscope", void 0);
HoroscopeItemComponent = __decorate([
    core_1.Component({
        selector: 'horoscope-item',
        templateUrl: './horoscope-item.component.html',
        styleUrls: ['./horoscope-item.component.css']
    }),
    __metadata("design:paramtypes", [])
], HoroscopeItemComponent);
exports.HoroscopeItemComponent = HoroscopeItemComponent;
//# sourceMappingURL=horoscope-item.component.js.map