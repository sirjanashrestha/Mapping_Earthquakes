
//Add tile layer to create background for our maptt
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', { //API URL with reference to accessToken
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken:API_KEY
});

//  Add dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with a center, zoom level and default layer
let map=L.map('mapid',{
  center:[30,30],
  zoom:2,
  layers:[streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Access the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/sirjanashrestha/Mapping_Earthquakes/main/majorAirports.json";

//Grabbing GeoJSON data using d3.JSON
d3.json(airportData).then(function(data){
    console.log(data);
    //creating GeoJSON layer with retreived data
    L.geoJSON(data).addTo(map);
});




 

