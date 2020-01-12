import { Component, OnInit,Input } from '@angular/core';
import { Http,Response } from '@angular/http'
import { Horoscope,MonthlyHoroScope,WeeklyHoroScope,DailyHoroScope} from '../horoscopes'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Component({
  selector: 'horoscope-detail',
  templateUrl: './horoscope-detail.component.html',
  styleUrls: ['./horoscope-detail.component.css']
})
export class HoroscopeDetailComponent implements OnInit {

   @Input() horoscopeSelected:Horoscope;
 
   Monthly :MonthlyHoroScope
   Weekly :WeeklyHoroScope
   Daily :DailyHoroScope

   @Input()
  monthlySelected : boolean
  @Input()
  dailySelected : boolean
  @Input()
  weeklySelected : boolean

  constructor(private servicecaller:Http) {


   }


  ngOnInit() 
  {
    
  
  }


getDailyPredictions(name:string):void
{
this.servicecaller.get("http://www.horoscopewebapi.somee.com/Horoscope/GetDailyPredictions/"+name).map((response:Response)=><DailyHoroScope>response.json()).subscribe((data)=>this.Daily=data);

  this.monthlySelected = false;
  this.dailySelected = true;
  this.weeklySelected = false;
}



getMonthlyPredictions(name:string):void
{
this.servicecaller.get("http://www.horoscopewebapi.somee.com/Horoscope/GetMonthlyPredictions/"+name).map((response:Response)=><MonthlyHoroScope>response.json()).subscribe((data)=>this.Monthly=data);

  this.monthlySelected = true;
  this.dailySelected = false;
  this.weeklySelected = false;
}

getWeeklyPredictions(name:string):void
{
this.servicecaller.get("http://www.horoscopewebapi.somee.com/Horoscope/GetWeeklyPredictions/"+name).map((response:Response)=><WeeklyHoroScope>response.json()).subscribe((data)=>this.Weekly=data);

  this.monthlySelected = false;
  this.dailySelected = false;
  this.weeklySelected = true;

}


}
