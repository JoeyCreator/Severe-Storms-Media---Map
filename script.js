const mapbox_token = "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcG14bGJtMnltcTJvbndudThkb2drZiJ9.WjTov6fnMyLClhzWYq8Fig"

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/dark-v10',
  center: [-73.5673, 45.5017],
  zoom: 8.5
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');

// edit code below this comment //


var data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
    console.log(this.responseText);
    }
});
xhr.open("GET", "https://api.stm.info/pub/od/i3/v1/messages/etatservice/");
xhr.setRequestHeader("origin", "mon.domain.xyz");
xhr.setRequestHeader("apikey", "l7****3370ae5473053a71454d99bc19f0d6");
xhr.send(data);