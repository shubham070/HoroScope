"use strict";
var testing_1 = require("@angular/core/testing");
var horoscopes_component_1 = require("./horoscopes.component");
describe('HoroscopesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [horoscopes_component_1.HoroscopesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(horoscopes_component_1.HoroscopesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=horoscopes.component.spec.js.map