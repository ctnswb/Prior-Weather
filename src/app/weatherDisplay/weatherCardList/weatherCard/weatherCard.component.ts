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
    this.tempHigh = this.info.temperatureHigh;
    this.tempLow = this.info.temperatureLow;
    this.icon = this.info.icon;
  }

}