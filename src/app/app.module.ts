import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './weatherDisplay/weatherDisplay.component';
import { WeatherCardListComponent } from './weatherDisplay/weatherCardList/weatherCardList.component';
import { WeatherCardComponent } from './weatherDisplay/weatherCardList/weatherCard/weatherCard.component';


@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    WeatherCardListComponent,
    WeatherCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
