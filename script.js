const mapbox_token = "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcG14bGJtMnltcTJvbndudThkb2drZiJ9.WjTov6fnMyLClhzWYq8Fig"

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-73.5673, 45.5017],
  zoom: 8.5
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// edit code below this comment //

map.on('load', function () {
  map.addSource('Montreal', {
    'type': 'geojson',
    'data': {
      'type': 'Feature',
      'geometry': {
        'type': 'Polygon',
        'coordinates': [
          [
            [-73.5673, 45.5017],
            [-73.8206, 45.4896],
            [-73.7500, 45.4503],
            [-73.7500, 45.4503],
          ]
        ]
      }
    }
  });
  map.addLayer({
    'id': 'Montreal',
    'type': 'fill',
    'source': 'Montreal',
    'layout': {},
    'paint': {
      'fill-color': 'red',
      'fill-opacity': 0.5
    }
  });
});