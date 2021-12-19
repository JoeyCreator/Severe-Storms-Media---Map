mapboxgl.accessToken = 'pk.eyJ1Ijoiam9leWNyZWF0b3IiLCJhIjoiY2t4ZHI0YThiMTdzMjJva3kybnZxZzhkNyJ9.2wZYl3GR7if3ucmVBMoAFA';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/dark-v10',
	center: [-96.052335, 39.159882],
	zoom: 3.5
});


// disable map zoom when using scroll
map.scrollZoom.disable();



// map.on('load', () => {
// 	map.addSource('spcday1', {
// 		type: 'geojson',
// 		data: 'https://www.spc.noaa.gov/products/outlook/day1otlk_cat.nolyr.geojson'
// 	});

// 	map.addLayer({
// 		'id': 'spcday1-layer',
// 		'type': 'fill',
// 		'source': 'spcday1',
// 		'paint': {
// 			'fill-color': ['get', 'fill'],
// 			'fill-outline-color': ['get', 'stroke'],
// 			'fill-opacity': 0.5
// 		}
// 	});
// });

const size = 200;

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
	width: size,
	height: size,
	data: new Uint8Array(size * size * 4),

	// When the layer is added to the map,
	// get the rendering context for the map canvas.
	onAdd: function () {
		const canvas = document.createElement('canvas');
		canvas.width = this.width;
		canvas.height = this.height;
		this.context = canvas.getContext('2d');
	},

	// Call once before every frame where the icon will be used.
	render: function () {
		const duration = 1000;
		const t = (performance.now() % duration) / duration;

		const radius = (size / 2) * 0.3;
		const outerRadius = (size / 2) * 0.7 * t + radius;
		const context = this.context;

		// Draw the outer circle.
		context.clearRect(0, 0, this.width, this.height);
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			outerRadius,
			0,
			Math.PI * 2
		);
		context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
		context.fill();

		// Draw the inner circle.
		context.beginPath();
		context.arc(
			this.width / 2,
			this.height / 2,
			radius,
			0,
			Math.PI * 2
		);
		context.fillStyle = 'rgba(255, 100, 100, 1)';
		context.strokeStyle = 'white';
		context.lineWidth = 2 + 4 * (1 - t);
		context.fill();
		context.stroke();


		this.data = context.getImageData(
			0,
			0,
			this.width,
			this.height
		).data;


		map.triggerRepaint();


		return true;
	}
};

map.on('load', () => {
	map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });

	map.addSource('dot-point', {
		type: 'geojson',

		data: ''
	});
	map.addLayer({
		'id': 'layer-with-pulsing-dot',
		'type': 'symbol',
		'source': 'dot-point',
		'layout': {
			'icon-image': 'pulsing-dot'
		}
	});
});