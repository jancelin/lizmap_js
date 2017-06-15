lizMap.events.on({
   //lizmapeditionformdisplayed: function(e) {
   uicreated: function(e) {
          
        lizMap.addDock(
            'GNSS',
            'Edition Géolocalisée',
            'minidock',
            '',
            ' icon-map-marker'
        );
          
         $('#button-GNSS').click(function(){
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
            var lonlatTransform = new OpenLayers.Geometry.Point(lon,lat).transform('EPSG:4326', lizMap.map.getProjection());
            //console.log(lizMap.map.getProjection())
            //var point2 = new OpenLayers.Geometry.Point(lonlatTransform.x, lonlatTransform.y);
            //console.log(point2);
            //var point_ft = new OpenLayers.Feature.Vector(point2);
            //console.log(point_ft);

            //add a  geolocate maker
            //var lonLat = new OpenLayers.LonLat( position.coords.longitude ,position.coords.latitude )
            //    .transform(
            //     new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            //     lizMap.map.getProjectionObject() // to Spherical Mercator Projection
            //    );
            //var zoom=9;
            //var markers = new OpenLayers.Layer.Markers( "Markers" );
            //lizMap.map.addLayer(markers);
            //markers.addMarker(new OpenLayers.Marker(lonLat));
            //lizMap.map.setCenter (lonLat, zoom);
            
            
            var point4326 = new OpenLayers.Feature.Vector(
                            new OpenLayers.Geometry.Point(lonlatTransform.x, lonlatTransform.y));
            
            var layer = new OpenLayers.Layer.Vector("My Layer");

            lizMap.map.addLayer(layer);
            layer.addFeatures([point4326]);
            
            //---connaitre le nom des couches
            //
            //var mLayers = lizMap.map.layers;
            //for(var a = 0; a < mLayers.length; a++ ){
            //    console.log(mLayers[a].name)
            //};
            
            lizMap.editLayer.addFeatures([point4326]);
                        
            
            console.log('?????');
            });  
                 
          });
    }
});
