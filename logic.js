//Store our API endpoint as queryUrl.
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});
function getradius(feature){
  //console.log(feature.properties.mag);
  return (feature.properties.mag)
}

function getcolor(feature){
  //console.log(feature.geometry.coordinates[2]);
  let mydepth = feature.geometry.coordinates[2];
  let mycolor = "#DFFF00";
  if ( mydepth > 90) {
    mycolor = "red"
  }

  else if (mydepth >80){
    mycolor ="orange"
  }
  else if (mydepth >70){
    mycolor= "blue"
  }
  else if (mydepth >60){
    mycolor ="#CD5C5C"
  }
  else if (mydepth >50){
    mycolor = "brown"
  }
  else if (mydepth > 40){
    mycolor ="teal"
  }
  else if (mydepth > 30){
    mycolor = "#F08080"
  }

  else if (mydepth>20){
    mycolor = "#DE3163"
  }

  else if (mydepth>10){
    mycolor ="#40E0D0"
  }
  return(mycolor)
}
function createFeatures(earthquakeData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>${feature.properties.place}</h3><hr><p>${new Date(feature.properties.time)}</p>`);
  }

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  var earthquakes = L.geoJSON(earthquakeData, {
   pointToLayer : function(feature,latlng){
     return new L.CircleMarker(latlng,{
       radius : getradius(feature),
       color : 	getcolor(feature),
      fillOpacity: 100,
      
     });
   },
    onEachFeature: onEachFeature
  });

// A function to determine the marker size based on the magnitude
//function markerSize(mag) {
  //return Math.sqrt(mag) * 100;
//}

//Define arrays to hold the created magnitude and deepth marker.
//var cityMarkers = [];
//var mag = [];

//Loop through locations and create markers as per depth
//for (var i= 10; i< mag.length;i++){
//setting marker raduis for earthquake by passing mag into markersSize function

//}
  // Send our earthquakes layer to the createMap function/
  createMap(earthquakes);
}

function createMap(earthquakes) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    Earthquakes: earthquakes
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [street, earthquakes]
  });

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);


}
