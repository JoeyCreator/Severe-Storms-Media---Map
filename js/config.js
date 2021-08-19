var mymap = L.map('mapid').setView([39.159882, -96.052335], 4.5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	attribution: '2021 &copy; severestormsmedia.com',
	maxZoom: 18,
	id: 'mapbox/light-v10',
	tileSize: 512,
	zoomOffset: -1,
	accessToken: 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2tzM214YnU1MHRuMTJwcnd1OWVocW5hNyJ9.WVXk8pjKg6KMAOYdL8nDRg'
}).addTo(mymap);

map.addSource('spcday1', {
	type: 'geojson',
	data: 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
});

map.addLayer({
	'id': 'spcday1',
	'type': 'fill',
	'source': 'spcday1',
	'paint': {
		'fill-color': ['get', 'fill'],
		'fill-outline-color': ['get', 'stroke'],
		'fill-opacity': 0.5
	}
});