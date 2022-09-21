//Add console
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
//mapid references id tag in <div> element 
//object L.map()is assigned with variable map
//setView([latitude,longitude],zoom level(0-18))

//Add tile layer to create background for our maptt
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', { //API URL with reference to accessToken
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken:API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//MAP'S STYLES
//mapbox/streets-v11
//mapbox/outdoors-v11
//mapbox/light-v10
//mapbox/dark-v10
//mapbox/satellite-v9
//mapbox/satellite-streets-v11

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//Add a circle to the map
//L.circle([34.0522, -118.2437], {
  //radius: 300
 //}).addTo(map);

 //Add a circlemarket to the map
 //L.circleMarker([34.0522, -118.2437]).addTo(map);

 //Get data from cities.js
let cityData=cities;

 //Loop through the cities array and create one marker for each city
// cityData.forEach(function(city){
  //console.log(city)
  //L.marker(city.location).
  //bindPopup("<h2>"+city.city+","+city.state+"</h2><hr><h3> Population "
  //+city.population.toLocaleString()+"<h/3>").addTo(map);
 //});

  //Loop through the cities array and create circle marker for each city
  cityData.forEach(function(city){
    console.log(city)
    L.circleMarker(city.location,{
      radius:city.population/100000,
      fillOpacity:0.2,
      color: 'orange'
    }).
    bindPopup("<h2>"+city.city+","+city.state+"</h2><hr><h3> Population "
    +city.population.toLocaleString()+"<h/3>").addTo(map);
   });