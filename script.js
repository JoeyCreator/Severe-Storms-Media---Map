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

fetch("https://accuweatherstefan-skliarovv1.p.rapidapi.com/listCountries", {
	"method": "POST",
	"headers": {
		"content-type": "application/x-www-form-urlencoded",
		"x-rapidapi-key": "6e1bbcb34amsh1edcb3a4fd5419fp14d59fjsn70c906ea9757",
		"x-rapidapi-host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com"
	},
	"body": {
		"apiKey": "6e1bbcb34amsh1edcb3a4fd5419fp14d59fjsn70c906ea9757",
		"regionCode": "573"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});