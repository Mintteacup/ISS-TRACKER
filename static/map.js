var map = L.map('map').setView([0, 0], 2); // Looks for div with the id map, then centres the map on specific lat and lon and then zoom level

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // pulls map images from openstreetmap
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // attaches image to map

fetch("/iss-location") // calls the flask back end
  .then(response => response.json()) //parses the json response
  .then(data => { 
    const lat = data.lat;
    const lon = data.lon;
    L.marker([lat, lon]).addTo(map); // puts a leaflet marker where the iss is
  });