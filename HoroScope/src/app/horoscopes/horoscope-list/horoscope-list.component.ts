import { Component, Output, OnInit, EventEmitter } from '@angular/core';

import {Horoscope} from '../horoscopes';
import { ThrowStmt } from '@angular/compiler';
import {Http} from '@angular/http';
import { HoroscopeDetailComponent} from '../horoscope-detail/horoscope-detail.component';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'horoscope-list',
  templateUrl: './horoscope-list.component.html',
  styleUrls: ['./horoscope-list.component.css']
})
export class HoroscopeListComponent implements OnInit {
horoscopes: Horoscope[] = [];

  @Output() horoscopeSelected = new EventEmitter<Horoscope>();
  constructor() {

    this.horoscopes = [new Horoscope('Aquarius', 'Aquarius Horoscope', 'http://www.astrology-zodiac-signs.com/images/aquarius.jpg'),
                    new Horoscope('Pisces', 'Pisces Horoscope', 'http://www.astrology-zodiac-signs.com/images/pisces.jpg'),
                    new Horoscope('Aries', 'Aries Horoscope', 'http://www.astrology-zodiac-signs.com/images/aries.jpg'),
                    new Horoscope('Taurus', 'Taurus Horoscope', 'http://www.astrology-zodiac-signs.com/images/taurus.jpg'),
                    new Horoscope('Gemini', 'Gemini Horoscope', 'http://www.astrology-zodiac-signs.com/images/gemini.jpg'),
                    new Horoscope('Cancer', 'Cancer Horoscope', 'http://www.astrology-zodiac-signs.com/images/cancer.jpg'),
                    new Horoscope('Leo', 'Leo Horoscope', 'http://www.astrology-zodiac-signs.com/images/leo.jpg'),
                    new Horoscope('Virgo', 'Virgo Horoscope', 'http://www.astrology-zodiac-signs.com/images/virgo.jpg'),
                    new Horoscope('Libra', 'Libra Horoscope', 'http://www.astrology-zodiac-signs.com/images/libra.jpg'),
                    new Horoscope('Scorpio', 'Scorpio Horoscope', 'http://www.astrology-zodiac-signs.com/images/scorpio.jpg'),
                    new Horoscope('Sagittarius', 'Sagittarius Horoscope', 'http://www.astrology-zodiac-signs.com/images/sagittarius.jpg'),
                    new Horoscope('Capricon', 'Capricon Horoscope', 'http://www.astrology-zodiac-signs.com/images/capricorn.jpg')];
   }



  onSelected(horo: Horoscope) {
    horo.flag = false;
    this.horoscopeSelected.emit(horo);
      }


  ngOnInit() {
  }

}
