import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'weather-card',
  templateUrl: './weatherCard.component.html',
  styleUrls: ['./weatherCard.component.css']
})


export class WeatherCardComponent implements OnChanges{
  @Input() weather;
    info;
    day: string;
    summary: string;
    tempHigh: string;
    tempLow: string;
    icon: string;

  ngOnChanges(){
    this.info = this.weather.daily.data[0];
    this.summary= this.info.summary;
    this.day = new Date(this.info.time * 1000).toDateString().substring(0,11);

    if (window.navigator.language !==  "en-US") {
      this.tempHigh = this.convertToCelcius(this.info.temperatureHigh);
      this.tempLow = this.convertToCelcius(this.info.temperatureLow);
    } else {
      this.tempHigh = this.info.temperatureHigh + 'F';
      this.tempLow = this.info.temperatureLow + 'F';
    }
    this.icon = this.info.icon;

  }

  convertToCelcius(temperature) {
    let celcius = "";
    celcius += (temperature - 32) * 5 / 9;
    return celcius.split('.')[0] + 'C';
  }

}