import { Component, Input, OnChanges } from '@angular/core';


@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnChanges {

  @Input() mapData;
  map;
  ngOnChanges(){
    this.map = this.mapData;
    console.log(this.mapData);
  }
}