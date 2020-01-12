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
var horoscopes_1 = require("../horoscopes");
var HoroscopeListComponent = (function () {
    function HoroscopeListComponent() {
        this.horoscopes = [];
        this.horoscopeSelected = new core_1.EventEmitter();
        this.horoscopes = [new horoscopes_1.Horoscope("Aquarius", "Aquarius Horoscope", "http://www.astrology-zodiac-signs.com/images/aquarius.jpg"),
            new horoscopes_1.Horoscope("Pisces", "Pisces Horoscope", "http://www.astrology-zodiac-signs.com/images/pisces.jpg"),
            new horoscopes_1.Horoscope("Aries", "Aries Horoscope", "http://www.astrology-zodiac-signs.com/images/aries.jpg"),
            new horoscopes_1.Horoscope("Taurus", "Taurus Horoscope", "http://www.astrology-zodiac-signs.com/images/taurus.jpg"),
            new horoscopes_1.Horoscope("Gemini", "Gemini Horoscope", "http://www.astrology-zodiac-signs.com/images/gemini.jpg"),
            new horoscopes_1.Horoscope("Cancer", "Cancer Horoscope", "http://www.astrology-zodiac-signs.com/images/cancer.jpg"),
            new horoscopes_1.Horoscope("Leo", "Leo Horoscope", "http://www.astrology-zodiac-signs.com/images/leo.jpg"),
            new horoscopes_1.Horoscope("Virgo", "Virgo Horoscope", "http://www.astrology-zodiac-signs.com/images/virgo.jpg"),
            new horoscopes_1.Horoscope("Libra", "Libra Horoscope", "http://www.astrology-zodiac-signs.com/images/libra.jpg"),
            new horoscopes_1.Horoscope("Scorpio", "Scorpio Horoscope", "http://www.astrology-zodiac-signs.com/images/scorpio.jpg"),
            new horoscopes_1.Horoscope("Sagittarius", "Sagittarius Horoscope", "http://www.astrology-zodiac-signs.com/images/sagittarius.jpg"),
            new horoscopes_1.Horoscope("Capricon", "Capricon Horoscope", "http://www.astrology-zodiac-signs.com/images/capricorn.jpg")];
    }
    HoroscopeListComponent.prototype.onSelected = function (horo) {
        this.horoscopeSelected.emit(horo);
        this;
    };
    HoroscopeListComponent.prototype.ngOnInit = function () {
    };
    return HoroscopeListComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], HoroscopeListComponent.prototype, "horoscopeSelected", void 0);
HoroscopeListComponent = __decorate([
    core_1.Component({
        selector: 'horoscope-list',
        templateUrl: './horoscope-list.component.html',
        styleUrls: ['./horoscope-list.component.css']
    }),
    __metadata("design:paramtypes", [])
], HoroscopeListComponent);
exports.HoroscopeListComponent = HoroscopeListComponent;
//# sourceMappingURL=horoscope-list.component.js.map