  var mapOptions, canvas, map, mapApp, geocoder, marker, message,infowindow;
  mapApp = {};
  var markers = [];

  mapApp.initialize = function(){
    canvas = document.getElementById('map_canvas');
    mapOptions = {
      zoom: 8,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };  
    map = new google.maps.Map(canvas, mapOptions);
    infowindow = new google.maps.InfoWindow({
      content: "holding...."
    })
  }


  mapApp.codeAddress = function(){
    var geocoder = new google.maps.Geocoder();
    var address = document.getElementById('places').value;
    address = eval(address)
    // var hometown = document.getElementById('hometown').value;
    for (var t = 0; t < address.length; t++) {//console.log(address[t])
      
      geocoder.geocode({'address': address[t][1]}, function(results, status) {
      //map.setCenter(results[0].geometry.location);
        if (status == google.maps.GeocoderStatus.OK) {
          for (var i = 0; i < results.length; i++){ 
            // console.log(results)
            map.setCenter(results[i].geometry.location);
            marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
            markers.push(marker);
            
            // image = eval(image)
            // console.log(image)
            // for (var s = 0; s < image.length; s++){
            //   infowindow = new google.maps.InfoWindow({
            //     content: image[s]
            //   });
              // var contentString = '<div id="content">Hello world</div>';
              // infowindow = new google.maps.InfoWindow({
              //   content: contentString
              // });
              // google.maps.event.addListener(marker, 'click', function() {
              //   console.log('google.maps')
              //   infowindow.open(marker.get('map'), marker);
              // });
            // }
          }
        }else{ 
          alert("Geocode was not successful for the following reason: " + status);
        }
      });

      // geocoder.geocode({'hometown': hometown}, function(centercity) {
      //   console.log(centercity)
      //   map.setCenter(centercity.geometry.location);
      // });
      // var image = address[t][0];
      mapApp.setEventListener = function(){
        debugger;
        for (var i = 0; i < markers.length; i++) {
          var marker = markers[i];
          google.maps.event.addListener(marker, 'click', function () {
            console.log('yo')
            infowindow.setContent(this.html);
            infowindow.open(map, this);
          });
        }
      }
      
      // google.maps.event.addListener(marker, 'click', function() {
      //   console.log('marker')
      // //   // infowindow.open(marker.get('map'), marker);
      // });
    }
  }

  $(function(){
    $(mapApp.initialize);
    $(mapApp.codeAddress);
    $(mapApp.setEventListener);
  })