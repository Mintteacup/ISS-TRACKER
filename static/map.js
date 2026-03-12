var map = L.map('map').setView([0, 0], 2); // Looks for div with the id map, then centres the map on specific lat and lon and then zoom level

let currentMarker = null;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // pulls map images from openstreetmap
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // attaches image to map

setInterval(update, 5000); // 5 seconds

var issIcon = L.icon({
    iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/International_Space_Station.svg',
    iconSize: [120, 120], // width, height in pixels
    iconAnchor: [60, 60] // point of the icon that corresponds to marker's location
});


function update() {
  fetch("/iss-location") // calls the flask back end
  .then(response => response.json()) //parses the json response
  .then(data => { 
    const lat = data.lat;
    const lon = data.lon;
    console.log(lat, lon)

    if (currentMarker) {
      map.removeLayer(currentMarker);
    }

    currentMarker = L.marker([lat, lon], {icon: issIcon})
      .bindPopup(
        "<b>ISS Location</b><br>" +
        "Lat: " + lat.toFixed(4) + "<br>" +
        "Lon: " + lon.toFixed(4)
      )
      .openPopup()
      .addTo(map); // puts a leaflet marker where the iss is

    map.setView([lat, lon]); // centers the map on the ISS
  });
}


