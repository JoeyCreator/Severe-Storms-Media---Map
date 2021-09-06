mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2tzM214YnU1MHRuMTJwcnd1OWVocW5hNyJ9.WVXk8pjKg6KMAOYdL8nDRg';
var map = new mapboxgl.Map({
	container: 'map',
	center: [-95.7129, 37.0902],
	zoom: 3.5,
	style: 'mapbox://styles/mapbox/dark-v10'
});

// disable map zoom when using scroll
map.scrollZoom.disable();

map.on('load', () => {
	map.addSource('earthquakes', {
		type: 'geojson',
		// Use a URL for the value for the `data` property.
		data: 'https://severestormsmedia.com/api/chasers/chasers.geojson'
	});

	map.addLayer({
		'id': 'earthquakes-layer',
		'type': 'circle',
		'source': 'earthquakes',
		'paint': {
			'circle-radius': 8,
			'circle-stroke-width': 2,
			'circle-color': 'red',
			'circle-stroke-color': 'white'
		}
	});
});


map.on('load', () => {
	map.addSource('spcday1', {
		type: 'geojson',
		data: ' https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
	});

	map.addLayer({
		'id': 'spcday1-layer',
		'type': 'fill',
		'source': 'spcday1',
		'paint': {
			'fill-color': ['get', 'fill'],
			'fill-outline-color': ['get', 'stroke'],
			'fill-opacity': 0.5
		}
	});
});