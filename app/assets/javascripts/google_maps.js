var mapOptions, canvas, map, mapApp;
mapApp = {};

mapApp.initialize = function(){
  canvas = document.getElementById('map_canvas');
  var latLng = new google.maps.LatLng(51.508742, -0.120850)
  mapOptions = {
    zoom: 8,
    center:latLng,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(canvas, mapOptions);
}

$(mapApp.initialize);