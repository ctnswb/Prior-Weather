import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'weather-card-list',
  templateUrl: './weatherCardList.component.html',
  styleUrls: ['./weatherCardList.component.css']
})
export class WeatherCardListComponent implements OnChanges{

  @Input() weatherData;

  ngOnChanges(){

  }
}
