import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})

export class MapComponent implements OnChanges {
  @Input() coordinates;
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  marker: google.maps.Marker;

  ngOnChanges() {
    var coords = {lat: this.coordinates.latitude, lng: this.coordinates.longitude};
    var mapProp = {
      center: coords,
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapProp);
    this.marker = new google.maps.Marker({
      position: coords,
      map: this.map
    })
  }

}