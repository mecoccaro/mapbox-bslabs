import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'
// @ts-ignore
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import turfArea from '@turf/area'
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-polygon',
  templateUrl: './polygon.component.html',
  styleUrls: ['./polygon.component.css']
})
export class PolygonComponent implements OnInit {

  ngOnInit(): void {
    	(mapboxgl as any).accessToken = environment.mapboxKey;
      const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [-91.874, 42.76],
      zoom: 12
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
      polygon: true,
      trash: true
      },
      defaultMode: 'draw_polygon'
      });
      map.addControl(draw);

      map.on('draw.create', updateArea);
      map.on('draw.delete', updateArea);
      map.on('draw.update', updateArea);

      function updateArea(e: { type: any; }) {
        const data = draw.getAll();
        const answer = document.getElementById('calculated-area');
        if (data.features.length > 0) {
          const area = turfArea(data);

          const rounded_area = Math.round(area * 100) / 100;
          (answer as any).innerHTML =
            '<p><strong>' +
            rounded_area +
            '</strong></p><p>metros cuadrados</p>';
        } else {
          (answer as any).innerHTML = '';
          if (e.type !== 'draw.delete')
            alert('Usa la herramienta para dibujar poligonos');
        }
      }
  }

}
