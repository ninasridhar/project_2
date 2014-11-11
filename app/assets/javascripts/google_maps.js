var mapOptions, canvas, map, mapApp, geocoder, marker;
mapApp = {};

mapApp.initialize = function(){
  canvas = document.getElementById('map_canvas');
  mapOptions = {
    zoom: 8,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(canvas, mapOptions);
}

mapApp.codeAddress = function(){
  geocoder = new google.maps.Geocoder();
  var Address = document.getElementById('hometown').value;
  geocoder.geocode( { 'address': Address}, function(results, status) {
  //map.setCenter(results[0].geometry.location);
  if (status == google.maps.GeocoderStatus.OK) { 
    map.setCenter(results[0].geometry.location);
    var marker = new google.maps.Marker({
      map: map,
      position: results[0].geometry.location
    })
  }else{ 
    alert("Geocode was not successful for the following reason: " + status);
  }})
}


$(function(){
  $(mapApp.initialize);
  $(mapApp.codeAddress);
})