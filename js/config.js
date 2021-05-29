var mymap = L.map('mapid').setView([39.159882, -96.052335], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; severestormsmedia.com',
    maxZoom: 4.1,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2tva253dHRxMDFhMzJubzF0NmNidTV1byJ9.fuQQQ11Nb0tnr-jbWemOsQ'
}).addTo(mymap);

var subs = ["mesonet", "mesonet1", "mesonet2", "mesonet3"];
var nexrad = L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi?", {
    layers: 'nexrad-n0q-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
});

var wmsLayer = L.tileLayer.wms('http://mesonet.agron.iastate.edu/cache/tile.py/1.0.0/nexrad-n0q-900913/', {
    layers: 'TOPO-OSM-WMS'
}).addTo(map);