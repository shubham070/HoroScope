import { Component, OnInit ,Input} from '@angular/core';


import {Horoscope} from '../../horoscopes'
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'horoscope-item',
  templateUrl: './horoscope-item.component.html',
  styleUrls: ['./horoscope-item.component.css']
})
export class HoroscopeItemComponent implements OnInit {
@Input()
horoscope: Horoscope;
  constructor() { }

  ngOnInit() {
  }

}
