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

  geocoder = new google.maps.Geocoder();
  var result = document.getElementById('places').value;
  address = eval('(' + result + ')');

  var input = $('#searchbox')[0];
  searchBox = new google.maps.places.SearchBox(input);

  var hometown = document.getElementById('hometown').value;
  homecity = eval('(' + hometown + ')')
}



mapApp.setEventListeners = function(){
  $.each(markers, function(index, marker){
    google.maps.event.addListener(marker, 'click', function() {
      console.log(marker);
      marker.info.open(map, marker);
    });
  })
  google.maps.event.addListener(searchBox, 'places_changed', function(){
    mapApp.searchBox();
  })
}

mapApp.codeAddress = function(){
  

  $.each(address, function(key, value){
    geocoder.geocode({'address': key}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        count++;
        // create a new marker object
        map.setCenter(results[0].geometry.location);
        marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
        //Attach a info box to the marker
        //Look up the location in the address hash and retrive the image
        if (address[results[0].address_components[0].short_name]){
          var imageUrl = address[results[0].address_components[0].short_name].image.uploaded_image.url
        } else {
          imageUrl = 'defaultimagehere'
        }
        // var imageLink = address[results[0].address_components[0].short_name].image.id
        var contentImage = "<img class='boxII' src='" + imageUrl + "'/>"
        marker.info = new google.maps.InfoWindow({
          content: contentImage
        });
        markers.push(marker);
        console.log(markers, markers.length);
        if (markers.length === count) {
          mapApp.setEventListeners();
        }
      }    
    })
  });
}

mapApp.searchBox = function(event){
  var places = searchBox.getPlaces();
  var bounds = new google.maps.LatLngBounds();
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