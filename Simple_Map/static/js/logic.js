//Add console
console.log("working")

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
//mapid references id tag in <div> element 
//object L.map()is assigned with variable map
//setView([latitude,longitude],zoom level(0-18))

//Add tile layer to create background for our maptt
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', { //API URL with reference to accessToken
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken:API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

