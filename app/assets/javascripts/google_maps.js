  var mapOptions, canvas, map, mapApp, geocoder, marker, message, infowindow;
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
      marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      })
        image = [ "Center" ]
        infowindow = new google.maps.InfoWindow({
        content: image[0]
        });
        google.maps.event.addListener(marker, 'click', function() {
        console.log(google.maps)
        infowindow.open(marker.get('map'), marker);
        })
    }else{ 
      alert("Geocode was not successful for the following reason: " + status);
    }})
  }

  // mapApp.attachMessage = function(marker, word){
  //   var message = [ "Center" ]
  //   var infowindow = new google.maps.InfoWindow({
  //     content: message[word]
  //   });
  //   google.maps.event.addListener(marker, 'click', function() {
  //     console.log(google.maps)
  //     infowindow.open(marker.get('map'), marker);
  //   });
  // }

  // google.maps.event.addDomListener(window, 'load', initialize);
  $(function(){
    $(mapApp.initialize);
    $(mapApp.codeAddress);
    // $(mapApp.attachMessage);
    // $(marker).on('click', mapApp.attachMessage);
  })