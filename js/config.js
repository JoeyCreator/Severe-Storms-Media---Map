var mymap = L.map('mapid').setView([39.159882, -96.052335], 13);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 5.1,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2tva253dHRxMDFhMzJubzF0NmNidTV1byJ9.fuQQQ11Nb0tnr-jbWemOsQ'
}).addTo(mymap);

var mymap = L.tileLayer.wms("https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0q.cgi?", {
    layers: 'nexrad-n0r-900913',
    format: 'image/png',
    transparent: true,
    attribution: "Weather data © 2012 IEM Nexrad"
});

addWMSTiles(url,layers="1").addTo(map);