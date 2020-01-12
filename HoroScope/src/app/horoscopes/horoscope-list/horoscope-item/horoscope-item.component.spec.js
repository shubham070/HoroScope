"use strict";
var testing_1 = require("@angular/core/testing");
var horoscope_item_component_1 = require("./horoscope-item.component");
describe('HoroscopeItemComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [horoscope_item_component_1.HoroscopeItemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(horoscope_item_component_1.HoroscopeItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=horoscope-item.component.spec.js.map