var map = L.map('map').setView([0, 0], 2); // Looks for div with the id map, then centres the map on specific lat and lon and then zoom level

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // pulls map images from openstreetmap
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // attaches image to map

setInterval(update, 5000); // 5 seconds

function update() {
  fetch("/iss-location") // calls the flask back end
  .then(response => response.json()) //parses the json response
  .then(data => { 
    const lat = data.lat;
    const lon = data.lon;
    console.log(lat, lon)
    L.marker([lat, lon]).bindPopup(
      "<b>ISS Location</b><br>" +
      "Lat: " + lat.toFixed(4) + "<br>" +
      "Lon: " + lon.toFixed(4)
    ).openPopup().addTo(map); // puts a leaflet marker where the iss is

    map.setView([lat, lon], 4); // centers the map on the ISS
  });
}


