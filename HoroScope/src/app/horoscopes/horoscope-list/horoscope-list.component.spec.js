"use strict";
var testing_1 = require("@angular/core/testing");
var horoscope_list_component_1 = require("./horoscope-list.component");
describe('HoroscopeListComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [horoscope_list_component_1.HoroscopeListComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(horoscope_list_component_1.HoroscopeListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=horoscope-list.component.spec.js.map