const mapbox_token = "pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2trcG14bGJtMnltcTJvbndudThkb2drZiJ9.WjTov6fnMyLClhzWYq8Fig"

mapboxgl.accessToken = mapbox_token;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-96.052335, 39.159882],
    zoom: 3.5
});

// disable map zoom when using scroll
map.scrollZoom.disable();

// Storm Prediction Center -> Spcd Day 1 //

map.on('load', function () {
    var layers = map.getStyle().layers;
    var firstSymbolId;
    for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
            firstSymbolId = layers[i].id;
            break;
        }
    }
    map.addSource('spcday1', {
        'type': 'geojson',
        'data': 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.lyr.geojson'
    });
    map.addLayer(
        {
            'id': 'spcday1',
            'type': 'fill',
            'source': 'spcday1',
            'layout': {},
            'paint': {
                'fill-color': ['get', 'fill'],
                'fill-outline-color': ['get', 'stroke'],
                'fill-opacity': 0.3
            }
        },
    );
});

// Weather Radar //


map.on("load", () => {
    fetch("https://tilecache.rainviewer.com/api/maps.json")
        .then(res => res.json())
        .then(timestamps => timestamps.sort())
        .then(timestamps => {
            timestamps.forEach(timestamp => {
                map.addLayer({
                    id: `rainviewer_${timestamp}`,
                    type: "raster",
                    source: {
                        type: "raster",
                        tiles: [
                            `https://tilecache.rainviewer.com/v2/radar/${timestamp}/256/{z}/{x}/{y}/3/0_0.png`
                        ],
                        tileSize: 256
                    },
                    layout: { visibility: "none" },
                    minzoom: 0,
                    maxzoom: 12
                });
            });

            let i = 0;
            const interval = setInterval(() => {
                if (i > timestamps.length - 1) {
                    clearInterval(interval);
                    return;
                } else {
                    timestamps.forEach((timestamp, index) => {
                        map.setLayoutProperty(
                            `rainviewer_${timestamp}`,
                            "visibility",
                            index === i || index === i - 1 ? "visible" : "none"
                        );
                    });
                    if (i - 1 >= 0) {
                        const timestamp = timestamps[i - 1];
                        let opacity = 1;
                        setTimeout(() => {
                            const i2 = setInterval(() => {
                                if (opacity <= 0) {
                                    return clearInterval(i2);
                                }
                                map.setPaintProperty(
                                    `rainviewer_${timestamp}`,
                                    "raster-opacity",
                                    opacity
                                );
                                opacity -= 0.1;
                            }, 50);
                        }, 400);
                    }
                    i += 1;
                }
            }, 2000);
        })
        .catch(console.error);
});