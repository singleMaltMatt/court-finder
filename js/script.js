// ---------- LINES 2 - 12 IS REFERENCE
// Creating map options
let mapOptions = {
    center: [-26.123377362057052, 28.030939374601676],
    zoom: 10
}
// Creating a map object
let map = new L.map('map', mapOptions);
// Creating a Layer object
let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// Adding layer to the map
map.addLayer(layer);
// ---------- LINES 2 - 12 IS REFERENCE

// let map = L.map('map').setView([-26.123246375796402, 28.030899710127898], 10);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map);

// let searchControl = L.esri.Geocoding.geosearch({
//     position: 'topright',
//     placeholder: 'Search...',
//     useMapBounds: false,
//     providers: [L.esri.Geocoding.arcgisOnlineProvider(
//         {
//             apiKey: "AAPK438d4e0800b049e9bdf27a2a9c6646a56h2Asc4HG9BIG5tTELc53mvrFfJi_5-ryCU0IVKp-uzMRv3b4H6iQaeBw7dZnOCD",
//             nearby: {
//                 lat: -33.8688,
//                 lng: 151.2093
//             }
//         }
//     )]
// }).addTo(map);

// let results = L.layerGroup().addTo(map);

// searchControl.on('results', function (data) {
//     results.clearLayers();
//     for (let i = data.results.length - 1; 1 >= 0; i--) {
//         results.addLayer(L.marker(data.results[i].latlng));
//     }
// });