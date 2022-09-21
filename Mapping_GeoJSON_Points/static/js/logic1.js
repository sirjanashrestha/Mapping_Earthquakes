// Create the map object with a center at San Fransisco airport
let map=L.map('mapid').setView([37.5, -122.5],10);

//coordinates from Los Angeles International Airport(LAX) to San Francisco Airport
let line = [
  [37.6213, -122.3790],
  [30.19742, -97.66630],
  [43.67771, -79.62481],
  [40.63972, -73.77889]
]; 

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

//Grabbing JSON data using pointToLayer
//L.geoJSON(sanFranAirport,{
  //Turn each feature into marker on the map
  //pointToLayer: function(feature, latlng) {
    //console.log(feature);
    //return L.marker(latlng)
   // .bindPopup("<h2>"+feature.properties.city+"</h2>");
 // }

//}).addTo(map);


//Grabbing JSON data using onEachFeature
L.geoJSON(sanFranAirport,{
  //Turn each feature into marker on the map
  onEachFeature: function(feature, layer) {
    console.log(layer);
    layer.bindPopup("<h2>"+feature.properties.city+"</h2><hr><h3>"+feature.properties.name+"</h3>");
  }

}).addTo(map);

//Add tile layer to create background for our maptt
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', { //API URL with reference to accessToken
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken:API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);


 

