import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/environment";
import * as mapboxgl from 'mapbox-gl'
// @ts-ignore
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.css']
})
export class SearchMapComponent implements OnInit {

  ngOnInit() {

    (mapboxgl as any).accessToken = environment.mapboxKey;

    const map = new mapboxgl.Map({
      container: 'map-mapbox',
      style: 'mapbox://styles/mapbox/satellite-v9',
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
      const marketLL = marker.getLngLat()
      geocoder.on('result', function(e: { result: { geometry: any; }; }) {
        // @ts-ignore
        console.log(e.result.geometry.coordinates)
        marker.setLngLat(e.result.geometry.coordinates)
        marker.setPopup(new mapboxgl.Popup().setText('Longitud: '+ marketLL.lng + ', Latitud: ' + marketLL.lat))
        marker.togglePopup()
      });
    });
  }

}
