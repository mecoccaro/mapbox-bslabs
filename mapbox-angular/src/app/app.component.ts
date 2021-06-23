import { Component, OnInit } from '@angular/core';
import {environment} from '../environments/environment';
import * as mapboxgl from 'mapbox-gl'
// @ts-ignore
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit() {

    // @ts-ignore
    mapboxgl.accessToken = environment.mapboxKey;

    var map = new mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.25948, 37.87221],
      zoom: 12,
    });

    var geocoder = new MapboxGeocoder({
      accessToken: environment.mapboxKey,
      mapboxgl: mapboxgl,
      marker: false,
    });

    map.addControl(geocoder);

  }

}
