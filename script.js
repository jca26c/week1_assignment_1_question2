var map = L.map('map').setView([37.7, -122.4], 10);

  // load a tile layer
L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

  // load GeoJSON from an external file
$.getJSON("https://raw.githubusercontent.com/gbrunner/adv-python-for-gis-and-rs/master/Week%201/sf_crime.geojson",function(data){
  var marker_crime = new L.Icon({
    iconUrl: 'https://effect.org/wp-content/uploads/2016/01/crime-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    shadowSize: [41, 41]
});
 
  L.geoJson(data,{
    pointToLayer: function(feature,latlng){
	  return L.marker(latlng,{icon: marker_crime});
    }
  }  ).addTo(map);
});
