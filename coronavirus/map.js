mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcG14bGJtMnltcTJvbndudThkb2drZiJ9.WjTov6fnMyLClhzWYq8Fig';

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-96.052335, 39.159882],
    zoom: 3.5
});


// disable map zoom when using scroll
map.scrollZoom.disable();