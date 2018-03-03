import axios from 'axios';
import Promise from 'Bluebird';

export class WeatherDataService {
  location: string;

  // This Function calls the server endpoint to grab weather data
  getWeatherData(location) {
    return new Promise ((resolve, reject) => {
      this.location = location;
      axios.get('/sky', {
        params: {
          location: this.location
        }
      }).then((data) => {
        resolve(data);
      }).catch((error) => {
        reject(error);
      })
    })
  }

  getLocation() {
    return this.location;
  }
}