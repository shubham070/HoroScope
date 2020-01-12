import { Component, OnInit } from '@angular/core';

import {Horoscope} from './horoscopes';

@Component({

  // tslint:disable-next-line:component-selector
  selector: 'horoscopes',
  templateUrl: './horoscopes.component.html',
  styleUrls: ['./horoscopes.component.css']
})
export class HoroscopesComponent implements OnInit {
horoscopeSelected: Horoscope;


  constructor() { }

  ngOnInit() {
  }

}
