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

// edit code below this comment //


var marker = new mapboxgl.Marker({
  color: "orange",
  draggable: false
}).setLngLat([-73.8206, 45.4896])
  .addTo(map);