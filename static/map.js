var map = L.map('map').setView([51.505, -0.09], 13); // Looks for div with the id map, then centres the map on specific lat and lon and then zoom level

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // pulls map images from openstreetmap
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map); // attaches image to map
