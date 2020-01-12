import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Horoscope, MonthlyHoroScope, WeeklyHoroScope, DailyHoroScope} from '../horoscopes';
import 'rxjs/add/operator/map';
import { Observable, Subject } from 'rxjs';
import 'rxjs/add/operator/catch';
import {ChangeDetectorRef} from '@angular/core';




// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'horoscope-detail',
  templateUrl: './horoscope-detail.component.html',
  styleUrls: ['./horoscope-detail.component.css']
})
export class HoroscopeDetailComponent implements OnInit {

   // tslint:disable-next-line:member-ordering
   @Input() horoscopeSelected: Horoscope;


   Monthly: MonthlyHoroScope;
   Weekly: WeeklyHoroScope;
   Daily: DailyHoroScope;

   @Input()
    monthlySelected: boolean;
  @Input()
  dailySelected: boolean;
  @Input()
  weeklySelected: boolean;

  constructor(private servicecaller: Http) {
   }


  ngOnInit() {
    }


getDailyPredictions(name: string): void {
  this.Daily = null;
// tslint:disable-next-line:typedef-whitespace
// tslint:disable-next-line:max-line-length
this.servicecaller.get('http://www.horoscopewebapi.somee.com/Horoscope/GetDailyPredictions/' + name)
.map((response: Response) => response.json() as DailyHoroScope).subscribe((data) => this.Daily = data);
this.horoscopeSelected.flag = true;
this.monthlySelected = false;
this.dailySelected = true;
this.weeklySelected = false;
}



getMonthlyPredictions(name: string): void {
  this.Monthly = null;
  // tslint:disable-next-line:max-line-length
this.servicecaller.get('http://www.horoscopewebapi.somee.com/Horoscope/GetMonthlyPredictions/' + name).map((response: Response) => response.json() as MonthlyHoroScope).subscribe((data) => this.Monthly = data);

this.horoscopeSelected.flag = true;
this.monthlySelected = true;
this.dailySelected = false;
this.weeklySelected = false;
}

getWeeklyPredictions(name: string): void {
  this.Weekly = null;
// tslint:disable-next-line:max-line-length
this.servicecaller.get('http://www.horoscopewebapi.somee.com/Horoscope/GetWeeklyPredictions/' + name).map((response: Response) => response.json() as WeeklyHoroScope).subscribe((data) => this.Weekly = data);
this.horoscopeSelected.flag = true;
this.monthlySelected = false;
this.dailySelected = false;
this.weeklySelected = true;
}


}
