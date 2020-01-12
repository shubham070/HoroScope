"use strict";
var Horoscope = (function () {
    function Horoscope(name, description, imagepath) {
        this.name = name;
        this.description = description;
        this.imagepath = imagepath;
    }
    return Horoscope;
}());
exports.Horoscope = Horoscope;
var MonthlyHoroScope = (function () {
    function MonthlyHoroScope(horoscope, month, sunsign, isMonthly) {
        if (isMonthly === void 0) { isMonthly = false; }
        this.horoscope = horoscope;
        this.month = month;
        this.sunsign = sunsign;
        this.isMonthly = isMonthly;
    }
    return MonthlyHoroScope;
}());
exports.MonthlyHoroScope = MonthlyHoroScope;
var WeeklyHoroScope = (function () {
    function WeeklyHoroScope(horoscope, week, sunsign, isWeekly) {
        this.horoscope = horoscope;
        this.week = week;
        this.sunsign = sunsign;
        this.isWeekly = isWeekly;
    }
    return WeeklyHoroScope;
}());
exports.WeeklyHoroScope = WeeklyHoroScope;
var DailyHoroScope = (function () {
    function DailyHoroScope(horoscope, date, sunsign, isDaily) {
        this.horoscope = horoscope;
        this.date = date;
        this.sunsign = sunsign;
        this.isDaily = isDaily;
    }
    return DailyHoroScope;
}());
exports.DailyHoroScope = DailyHoroScope;
//# sourceMappingURL=horoscopes.js.map