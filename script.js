const mapbox_token = "sk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcTJlMXdxMDFqajJ2cWwwZXhjdHMyeCJ9.vykq4k59-10j7HKQ3Tz_Gw"

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-73.5673, 45.5017],
  zoom: 9.5
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// edit code below this comment //