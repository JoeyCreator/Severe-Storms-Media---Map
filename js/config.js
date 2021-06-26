mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2txZWU1eHpiMDBuczJwcjFzYzgyaXlmaSJ9.Zuq7AJyK1RRGN-ZFbJxY6A';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-96.052335, 39.159882],
  zoom: 4.5
});

map.scrollZoom.disable();

map.addSource('spcday1', {
  type: 'geojson',
  data: 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
});



map.addSource('spcday1', {
  type: 'geojson',
  data: {
    "type": "FeatureCollection",
    "features": [{
      "type": "Feature",
      'paint': {
        'fill-color': ['get', 'fill'],
        'fill-outline-color': ['get', 'stroke'],
        'fill-opacity': 0.5
      }
    }]
  }
});