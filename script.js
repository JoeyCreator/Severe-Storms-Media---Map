const mapbox_token = "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcG14bGJtMnltcTJvbndudThkb2drZiJ9.WjTov6fnMyLClhzWYq8Fig"

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-96.052335, 39.159882],
  zoom: 3.5
});

// disable map zoom when using scroll
map.scrollZoom.disable();

// Storm Prediction Center -> Spcd Day 1 //

map.on('load', function () {
  var layers = map.getStyle().layers;
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol') {
      firstSymbolId = layers[i].id;
      break;
    }
  }
  map.addSource('spcday1', {
    'type': 'geojson',
    'data': 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
  });
  map.addLayer(
    {
      'id': 'spcday1',
      'type': 'fill',
      'source': 'spcday1',
      'layout': {},
      'paint': {
        'fill-color': ['get', 'fill'],
        'fill-outline-color': ['get', 'stroke'],
        'fill-opacity': 0.8
      }
    },
  );
});

// Storm Prediction Center -> Spcd Day 2 //   /* Option Day1 - Day2 */

/*

map.on('load', function () {
  var layers = map.getStyle().layers;
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === 'symbol') {
      firstSymbolId = layers[i].id;
      break;
    }
  }
  map.addSource('spcday2', {
    'type': 'geojson',
    'data': 'https://www.spc.noaa.gov/products/outlook/day2otlk_cat.nolyr.geojson'
  });
  map.addLayer(
    {
      'id': 'spcday2',
      'type': 'fill',
      'source': 'spcday2',
      'layout': {},
      'paint': {
        'fill-color': ['get', 'fill'],
        'fill-outline-color': ['get', 'stroke'],
        'fill-opacity': 0.3
      }
    },
  );
});

*/

