import { Component, OnInit , } from '@angular/core';
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

    (mapboxgl as any).accessToken = environment.mapboxKey;

    const map = new mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.25948, 37.87221],
      zoom: 12,
    });

    const marker = new mapboxgl.Marker({
      draggable: true
    })
    .setLngLat([-122.25948, 37.87221])
    .addTo(map);

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      marker: false,
      placeholder: 'Search for places in Berkeley',
      bbox: [-122.30937, 37.84214, -122.23715, 37.89838],
      proximity: {
        longitude: -122.25948,
        latitude: 37.87221
      }
    });

    map.addControl(geocoder);

    map.on('load', function() {
      map.addSource('single-point', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      map.addLayer({
        id: 'point',
        source: 'single-point',
        type: 'circle',
        paint: {
          'circle-radius': 10,
          'circle-color': '#448ee4'
        }
      });

      geocoder.on('result', function(e: { result: { geometry: any; }; }) {
        // @ts-ignore
        map.getSource('single-point').setData(e.result.geometry);
      });
    });
  }


}
