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
map.scrollZoom.disable();


// Add Storm Prediction Center Outlook //

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=37.9643&lat=-91.8318");
xhr.setRequestHeader("x-rapidapi-key", "6e1bbcb34amsh1edcb3a4fd5419fp14d59fjsn70c906ea9757");
xhr.setRequestHeader("x-rapidapi-host", "weatherbit-v1-mashape.p.rapidapi.com");

xhr.send(data);