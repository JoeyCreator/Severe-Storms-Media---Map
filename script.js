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

// disable map zoom when using scroll => Map Setting //

// disable map zoom when using scroll
map.scrollZoom.disable();




// Storm Chasers Network //

var request = new XMLHttpRequest();

request.open('POST', 'https://www.spotternetwork.org/positions');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'id': 'APPLICATION-ID',
  'markers': [
    36181,
    13573
  ]
};

request.send(JSON.stringify(body));