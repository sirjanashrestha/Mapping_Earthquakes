//Add console
console.log("working")

// Create the map object with a center and zoom level.
//Create a map object
let map=L.map('mapid').setView([37.6213, -122.3790],5);

//coordinates from Los Angeles International Airport(LAX) to San Francisco Airport
let line = [
  [37.6213, -122.3790],
  [30.19742, -97.66630],
  [43.67771, -79.62481],
  [40.63972, -73.77889]
]; 

//Create a polyline using the line coordinates and make line red
L.polyline(line,{
  color:"blue"
}).addTo(map);

//Add tile layer to create background for our maptt
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', { //API URL with reference to accessToken
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken:API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);



 

