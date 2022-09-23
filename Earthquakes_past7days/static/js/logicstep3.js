
//Add tile layer to create background for our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', { //API URL with reference to accessToken
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken:API_KEY
});

//  Add dark view tile layer that will be an option for our map.
let satelliteStreets= L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with a center, zoom level and default layer
let map=L.map('mapid',{
  center:[39.5, -98.5],
  zoom:3,
  layers:[streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Access the earthqquake GeoJSON data
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Create a style for each of the earthquakes 
function styleInfo(feature){
  return{
    opacity:1,
    fillOpacity:1,
    fillColor:getColor(feature.properties.mag),
    color:"#000000",
    radius:getRadius(feature.properties.mag), //retreives earthquake's magnitude by calculating the radius of circle
    stroke:true,
    weight:0.5

  };
}
//Define function to get change marker's color based on magnitude
function getColor(magnitude){
  if (magnitude>5) {
    return "#ea2c2c";
  }
    if (magnitude>4){
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
  }

//Define function to determine the radius of earthquake market based on it
function getRadius(magnitude){
  if (magnitude==0){ //if magnitude is 0, magnitude is plotted as 1
    return 1;
  }
  return magnitude*4; //if magnitude is greater than 1, magnitude is multiplied by 4
}

//Grabbing GeoJSON data using d3.JSON
d3.json(earthquakeData).then(function(data){
    console.log(data);
    //creating GeoJSON layer with retreived data
    L.geoJSON(data,{
      //turn each feature into circleMarker on the map
      pointToLayer:function(feature,latlng){
        console.log(data);
        return L.circleMarker(latlng);
      },
      //Set style for each circleMarker using styleInfo function
      style:styleInfo,
      //Create popup for each circleMarker to display magnitude and location of earthquake
      onEachFeature:function(feature,layer){
        layer.bindPopup("Magnitude:"+feature.properties.mag+"<br>Location: "+feature.properties.place);
      }
    }).addTo(map);
});
