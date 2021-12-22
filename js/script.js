// // ---------- LINES 2 - 12 IS REFERENCE
// // Creating map options
// let mapOptions = {
//     center: [-26.123377362057052, 28.030939374601676],
//     zoom: 10
// }
// // Creating a map object
// let map = new L.map('map', mapOptions);
// // Creating a Layer object
// let layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// // Adding layer to the map
// map.addLayer(layer);
// // ---------- LINES 2 - 12 IS REFERENCE

//|| MAP CREATOR
const apiKey = "AAPK438d4e0800b049e9bdf27a2a9c6646a56h2Asc4HG9BIG5tTELc53mvrFfJi_5-ryCU0IVKp-uzMRv3b4H6iQaeBw7dZnOCD";
const basemapEnum = "ArcGIS:LightGray";
// ALT const basemapEnum = "OSM:Standard";

const map = L.map('map', {
    minZoom: 2
}).setView([-26.123377362057052, 28.030939374601676], 7);
// DEFAULT 13
L.esri.Vector.vectorBasemapLayer(basemapEnum, {
    apiKey: apiKey
}).addTo(map);

//|| GEOLOCATION CONTROL
const searchControl = L.esri.Geocoding.geosearch({
    position: "topright",
    placeholder: "Search...",
    useMapBounds: false,
    providers: [L.esri.Geocoding.arcgisOnlineProvider({
        apikey: apiKey,
        nearby: {
            lat: -33.8688,
            lng: 151.2093
        },
    })]
}).addTo(map);

const results = L.layerGroup().addTo(map);

searchControl.on("results", (data) => {
    results.clearLayers();
    for (let i = data.results.length - 1; i >= 0; i--) {
        const lngLatString = `${Math.round(data.results[i].latlng.lng * 100000) / 100000}, ${Math.round(data.results[i].latlng.lat * 100000) / 100000}`;
        const marker = L.marker(data.results[i].latlng);
        marker.bindPopup(`<b>${lngLatString}</b><p>${data.results[i].properties.LongLabel}</p>`)
        results.addLayer(marker);
        marker.openPopup();
    }
});

//|| GAUTENG GEOJSON LAYER
L.geoJSON(gpDists).addTo(map);
L.geoJSON(gpCourts).addTo(map);

//|| EASTERN CAPE GEOJSON LAYER
L.geoJSON(ecCourts).addTo(map);
L.geoJSON(ecDists).addTo(map);

//|| FREE STATE GEOJSON LATER
L.geoJSON(fsCourts).addTo(map);
L.geoJSON(fsDists).addTo(map);

//|| KWAZULU-NATAL GEOJSON LATER
L.geoJSON(kznCourts).addTo(map);
L.geoJSON(kznDists).addTo(map);

//|| LIMPOPO GEOJSON LATER
L.geoJSON(lpCourts).addTo(map);
L.geoJSON(lpDists).addTo(map);

//|| MPUMALANGA GEOJSON LAYER
L.geoJSON(mpCourts).addTo(map);
L.geoJSON(mpDists).addTo(map);

//|| NORTHERN CAPE GEOJSON LAYER
L.geoJSON(ncCourts).addTo(map);
L.geoJSON(ncDists).addTo(map);

//|| NORTH WEST GEOJSON LAYER
L.geoJSON().addTo(map);
L.geoJSON().addTo(map);

//|| WESTERN CAPE GEOJSON LAYER
L.geoJSON().addTo(map);
L.geoJSON().addTo(map);