export class Horoscope
{
constructor(public name:string,public description:string ,public imagepath:string)
{


}
}

export class MonthlyHoroScope
{
    constructor(public horoscope:string,public month:string,public sunsign:string,public isMonthly:boolean = false)
    {

    }
}

export class WeeklyHoroScope
{
    constructor(public horoscope:string ,public week:string ,public sunsign:string,public isWeekly:boolean)
    {

    }
}

export class DailyHoroScope
{
    constructor(public horoscope:string,public date:string,public sunsign:string,public isDaily:boolean)
    {

    }
}

