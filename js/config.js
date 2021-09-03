mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2tzM214YnU1MHRuMTJwcnd1OWVocW5hNyJ9.WVXk8pjKg6KMAOYdL8nDRg';
var map = new mapboxgl.Map({
	container: 'map',
	center: [-95.7129, 37.0902],
	zoom: 4.3,
	style: 'mapbox://styles/mapbox/dark-v10'
});


map.addSource('spcday1', {
	type: 'geojson',
	data: 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
});