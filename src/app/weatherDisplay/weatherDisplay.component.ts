import { Component } from '@angular/core';
import { WeatherDataService } from '../weatherData.service';

@Component({
  selector: 'weather-display',
  templateUrl: './weatherDisplay.component.html',
  styleUrls: ['./weatherDisplay.component.css'],
  providers: [WeatherDataService]
})
export class WeatherDisplayComponent {

  constructor(private weatherDataService: WeatherDataService) {}

  location : string;
  weatherData : Object[];
  dataLocation : string;

  onInputLocation(locationInput: HTMLInputElement){
    this.location = locationInput.value;
    this.weatherDataService.getWeatherData(this.location).then((data)=> {
      this.weatherData = data.data[0];
      this.dataLocation = data.data[1];
    });
  }
}
