# mapbox-bslabs

## Requisitos

* Instalar Angular
```
ng install -g @angular/cli
```

* Instalar mapbox-gl y mapbox-gl-geocoder
```
npm install --save-dev mapbox-gl
```
```
npm install --save-dev @mapbox/mapbox-gl-geocoder
```

* Agregar credenciales de mapbox a las variables de ambiente de angular ``/mapbox-angular/src/enviroments/enviroments.ts`` Crear la variable ``mapboxKey``

## Para ejecutar el programa

```
cd mapbox-angular
```
```
ng serve --open
```