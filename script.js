const mapbox_token = "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcG14bGJtMnltcTJvbndudThkb2drZiJ9.WjTov6fnMyLClhzWYq8Fig"

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-96.052335, 39.159882],
  zoom: 3.5
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// disable map zoom when using scroll
map.scrollZoom.disable();

// Storm Prediction Center // => add code below this comment //

map.on('load', function () {
var layers = map.getStyle().layers;
// Find the index of the first symbol layer in the map style
var firstSymbolId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol') {
firstSymbolId = layers[i].id;
break;
}
}
map.addSource('urban-areas', {
'type': 'geojson',
'data':
'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
});
map.addLayer(
{
'id': 'urban-areas-fill',
'type': 'fill',
'source': 'urban-areas',
'layout': {},
'paint': {
'fill-color': '#f08',
'fill-opacity': 0.4
}
},
firstSymbolId
);
});