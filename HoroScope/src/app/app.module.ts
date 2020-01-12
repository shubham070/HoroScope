import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { HoroscopesComponent } from './horoscopes/horoscopes.component';
import { HoroscopeListComponent } from './horoscopes/horoscope-list/horoscope-list.component';
import { HoroscopeDetailComponent } from './horoscopes/horoscope-detail/horoscope-detail.component';
import { HoroscopeItemComponent } from './horoscopes/horoscope-list/horoscope-item/horoscope-item.component';





@NgModule({
  declarations: [
    AppComponent,
    HoroscopesComponent,
    HoroscopeListComponent,
    HoroscopeDetailComponent,
    HoroscopeItemComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
