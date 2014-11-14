var mapOptions, canvas, map, mapApp, geocoder, marker, message,infowindow, address;
mapApp = {};
var markers = [];
var count = 0



mapApp.initialize = function(){
  canvas = document.getElementById('map_canvas');
  mapOptions = {
    zoom: 8,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };  
  map = new google.maps.Map(canvas, mapOptions);

  var result = document.getElementById('places').value;
  address = eval('(' + result + ')');
  var input = $('#searchbox')[0];
  searchBox = new google.maps.places.SearchBox(input);

  google.maps.event.addListener(searchBox, 'places_changed', function(){
    mapApp.searchBox();
  })
}

mapApp.setEventListeners = function(){
  $.each(markers, function(index, marker){
    google.maps.event.addListener(marker, 'click', function() {
      marker.info.open(map, marker);
    });
  })  
}




mapApp.codeAddress = function(){
  bounds = new google.maps.LatLngBounds();
  $.each(address, function(key, value){
    position=  new google.maps.LatLng(value.latitude, value.longitude)
    var marker = new google.maps.Marker({
      map: map,
      position: position
    });
    bounds.extend(position);
    var id = value.id
    var imageUrl = value.uploaded_image.url
    var contentImage = "<a href='/photos/ " +id +"'><img class='boxII' src='" + imageUrl + "'/></a>"; 
    var info = new google.maps.InfoWindow({
      content: contentImage
    });
    google.maps.event.addListener(marker, 'click', function() {
      info.open(map,marker);
    });
    markers.push(marker);
    if (markers.length === count) {
      mapApp.setEventListeners();
    }
  })
  map.fitBounds(bounds);
  map.setZoom(5);
}

mapApp.searchBox = function(event){
  var places = searchBox.getPlaces();
  bounds = new google.maps.LatLngBounds();
  for (var i = 0, place; place = places[i]; i++) {
    bounds.extend(place.geometry.location);
  }
  map.fitBounds(bounds);
  map.setZoom(8);
}

$(document).ready(function(){
  $(mapApp.initialize);
  $(mapApp.codeAddress);
})