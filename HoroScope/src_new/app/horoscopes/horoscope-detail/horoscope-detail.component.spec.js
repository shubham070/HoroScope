"use strict";
var testing_1 = require("@angular/core/testing");
var horoscope_detail_component_1 = require("./horoscope-detail.component");
describe('HoroscopeDetailComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [horoscope_detail_component_1.HoroscopeDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(horoscope_detail_component_1.HoroscopeDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=horoscope-detail.component.spec.js.map