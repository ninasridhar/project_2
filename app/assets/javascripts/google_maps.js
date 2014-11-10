var mapOptions, canvas, map, mapApp, geocoder;
mapApp = {};

mapApp.initialize = function(){
  canvas = document.getElementById('map_canvas');
  var latLng = new google.maps.LatLng(51.508742, -0.120850)
  // geocoder = new google.maps.Geocoder();
  mapOptions = {
    zoom: 8,
    center:latLng,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(canvas, mapOptions);
}

// mapApp.codeAddress = function(){
//   var Address = document.getElementById('city').value;
// }

$(mapApp.initialize);