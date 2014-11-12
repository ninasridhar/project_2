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
}

mapApp.setEventListeners = function(){
  $.each(markers, function(index, marker){
    google.maps.event.addListener(marker, 'click', function() {
      console.log(marker);
      marker.info.open(map, marker);
    });
  })
}

mapApp.codeAddress = function(){
  // var hometown = document.getElementById('hometown').value;
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
        marker.info = new google.maps.InfoWindow({
          content: "<img class='boxI' src='" + imageUrl + "'/>"
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

$(document).ready(function(){
  $(mapApp.initialize);
  $(mapApp.codeAddress);
})