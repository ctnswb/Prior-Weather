const axios = require('axios');
const Promise = require('bluebird');
const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_KEY
});


// This function compiles 7 days worth of weather data
// to be displayed in the client
exports.getWeatherData = (location) => {
  return new Promise ((resolve, reject) => {
    let weatherData = [];
    getLocationCoordinates(location).then((data) => {
      let date = new Date();
      for (let i = 0; i < 7; i++) {
        date.setDate(date.getDate()-1);
        weatherData.push(getDateWeather(data[0], parseDateString(date)));
      }
      Promise.all(weatherData).then((weatherDetails) => {
        resolve([weatherDetails, data[1]]);
      }).catch((errors) => {
        reject(errors);
      })
    }).catch((err) => {
      reject(err);
    })
  })
}

// This function uses the google maps geocoding api
// to translate an address into longitude and latitude coordinates
let getLocationCoordinates = (address) => {
  return new Promise ((resolve, reject) => {
    let location = {address: address};
    googleMapsClient.geocode(location, (err, response) => {
      if (!err) {
        let data = response.json.results[0];
        resolve([data.geometry.location, data.formatted_address]);
      } else {
        reject(err);
      }
    });
  })
}

// This function sends a request to the Dark Sky API
// to retrieve weather data for a specific location and day
let getDateWeather = (location, time) => {
  return new Promise ((resolve, reject) => {
    let apiKey = process.env.DARK_SKY_KEY;
    let url = "https://api.darksky.net/forecast/" + apiKey + "/" + location.lat + "," + location.lng + "," + time + "?exclude=currently,hourly,flags";
    axios.get(url).then((response) => {
      resolve(response.data);
    }).catch((err)=>{
      reject(err);
    })
  })
}

// This helper function formats the date into
// a string format accepted by Dark Sky
let parseDateString = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  if (month < 10) {
    month = "0" + month;
  }
  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  let dateString = year + "-" + month + "-" + day + "T12:30:00";
  return dateString;
}