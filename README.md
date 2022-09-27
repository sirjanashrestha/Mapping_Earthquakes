# Mapping_Earthquakes
## Overview of the Project
This project aims to build insightful data visualization on earthquakes around the world and show the differences between the magnitudes of earthquakes for the last seven days.The coordinates and magnitudes of earthquakes from GeoJSON data is retrieved using Javascript and D3.js library and plotted on a Mapbox map using leaflet library through an API request. 

Tools: Javascript, D3.js library,leaflet library, HTML, CSS, VS Code

Source of data: 
- Earthquake geoJSON data: https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson
- Tectonic plate data: https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json


## Purpose of the project
- Retrieve data from a GeoJSON file.
- Make API requests to a server to host geographical maps.
- Populate geographical maps with GeoJSON data using JavaScript and the Data-Driven Documents (D3) library.
- Add multiple map layers to geographical maps using Leaflet control plugins to add user interface controls.
- Use JavaScript ES6 functions to add GeoJSON data, features, and interactivity to maps.
- Render maps on a local server.

## Result
### Addition of tectonic plate
1. Street layer
<img width="1069" alt="Screen Shot 2022-09-24 at 6 26 39 PM" src="https://user-images.githubusercontent.com/107566776/192120734-ec6bfa7f-d664-45c7-a6f4-9172ccc41ecb.png">

2. Satellite layer
<img width="987" alt="Screen Shot 2022-09-27 at 4 17 11 PM" src="https://user-images.githubusercontent.com/107566776/192626945-898bad1f-478a-4783-8a6d-e70962b2e099.png">

### Addition of major earthquake data with magnitude>4.5
<img width="1051" alt="Screen Shot 2022-09-24 at 6 28 34 PM" src="https://user-images.githubusercontent.com/107566776/192120769-92ba8f7b-bd1f-4015-a4d1-a19ba61b85a8.png">

### Additional map style to earthquake map
<img width="1045" alt="Screen Shot 2022-09-24 at 7 54 09 PM" src="https://user-images.githubusercontent.com/107566776/192122704-24a33980-2eb0-429d-9dad-329d19df00be.png">
