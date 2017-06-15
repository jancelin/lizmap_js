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
            //console.log( position.coords.longitude , position.coords.latitude);
            //var lon = position.coords.longitude
            //var lat = position.coords.latitude;
            //var lonlatTransform = new OpenLayers.Geometry.Point(lon,lat).transform('EPSG:4326', lizMap.map.getProjection());
            //console.log(lizMap.map.getProjection())
            //var point2 = new OpenLayers.Geometry.Point(lonlatTransform.x, lonlatTransform.y);
            //console.log(point2);
            //var point_ft = new OpenLayers.Feature.Vector(point2);
            //console.log(point_ft);

            lizMap.map.addLayer(new OpenLayers.Layer.OSM());
            var lonLat = new OpenLayers.LonLat( position.coords.longitude ,position.coords.latitude )
                 .transform(
                 new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
                 lizMap.map.getProjectionObject() // to Spherical Mercator Projection
                );
            var zoom=9;
            var markers = new OpenLayers.Layer.Markers( "Markers" );
            lizMap.map.addLayer(markers);
            markers.addMarker(new OpenLayers.Marker(lonLat));
    
            lizMap.map.setCenter (lonLat, zoom);
               
            var pointF = new OpenLayers.Feature.Vector(lonLat)    
            
            //console.log(lizMap.map.getLayersByClass("OpenLayers.Layer.Vector") )
            lizMap.editionLayer['ol'].addFeatures([pointF]);
               
            console.log('?????');
            });  
                 
          });
    }
});
