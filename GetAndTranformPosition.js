lizMap.events.on({
   //lizmapeditionformdisplayed: function(e) {
   uicreated: function(e) {
      
         $('#attribution-box').click(function(){
             if ("geolocation" in navigator) {
             console.info('Geolocation available');
              } else {
             console.error('Geolocation not found');
              }
              
              // Getting current position
            navigator.geolocation.getCurrentPosition(function(position) {
            console.log( position.coords.longitude , position.coords.latitude);
            var lon = position.coords.longitude
            var lat = position.coords.latitude;
            var lonlatTransform = new OpenLayers.Geometry.Point(lon,lat).transform('EPSG:4326', 'EPSG:2154');
            var point2 = new OpenLayers.Geometry.Point(lonlatTransform.x, lonlatTransform.y);
            console.log(point2);
            var point_ft = new OpenLayers.Feature.Vector(point2, null, null);
            console.log(point_ft);
          
                 
          });
    }
});
