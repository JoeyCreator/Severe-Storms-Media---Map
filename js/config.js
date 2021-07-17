mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2txZWU1eHpiMDBuczJwcjFzYzgyaXlmaSJ9.Zuq7AJyK1RRGN-ZFbJxY6A';
var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-96.052335, 39.159882],
	zoom: 4.5
});

map.scrollZoom.disable();

const longitude = e.result.geometry.coordinates[0];
const latitude = e.result.geometry.coordinates[1];

const currentConditionsURL =
	"https://api.weather.com/v1/geocode/" + latitude + "/" + longitude + "/observation.json?language=en=USunits=e&apiKey" + twcApiKey;


map.addSource("twcRadar", {
	type: "raster",
	tiles: [
		"https://api.weather.com/v3/TileServer/tile/radar?ts=" + latestTimeSlice + "&xyz={x}:{y:{z}&apikey=" + twcApiKey,
	],
	tileSize: 256,
});

map.addLayer(
	{
		id: "radar",
		type: "raster",
		source: "twcRadar",
		paint: {
			"raster-opacity": 05,
		},
	},
	"aeroway-line"
);