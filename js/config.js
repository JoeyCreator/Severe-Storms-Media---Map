var mymap = L.map('mapid').setView([39.159882, -96.052335], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '&copy; severestormsmedia.com',
    maxZoom: 4.1,
    id: 'mapbox/dark-v10',
    tileSize: 512,
     zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2tva253dHRxMDFhMzJubzF0NmNidTV1byJ9.fuQQQ11Nb0tnr-jbWemOsQ'
}).addTo(mymap);