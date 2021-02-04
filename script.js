const mapbox_token = "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcG14bGJtMnltcTJvbndudThkb2drZiJ9.WjTov6fnMyLClhzWYq8Fig"

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-96.052335, 39.159882],
  zoom: 3.5
});

// Edit Code Below This Comment //

map.addSource('spcnoaa', {
  type: 'geojson',
  data: 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
});

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.responseType = 'json';
xhr.onload = function () {
  if (xhr.status !== 200) return
  L.geoJSON(xhr.response).addTo(map);
};
xhr.send();