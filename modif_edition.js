#####éditer le edition.js ligne 429
 
 
 // Creation
            if( action == 'createFeature' ){

                // Activate drawFeature control only if relevant
                if(  
 editionLayer['config'].capabilities.createFeature == "True"
                && geometryType in editCtrls ){
                    var ctrl = editCtrls[geometryType];
                    if ( ctrl.active ) {
                        return false;
                    } else {
                        ctrl.activate();

 $('#attribution-box').click(function(){
 alert('gps working...');
 navigator.geolocation.getCurrentPosition(function(position) {
 var lat = position.coords.latitude;
 var lon = position.coords.longitude;
 var point = new OpenLayers.Geometry.Point(lon, lat).transform(new  
 OpenLayers.Projection("EPSG:4326"), map.getProjectionObject());
 var point_ft = new OpenLayers.Feature.Vector(point, null, null);
 editionLayer['ol'].addFeatures([point_ft]);
 alert('finish');
 });
 });
                        $('#lizmap-edition-message').remove();
 lizMap.addMessage(lizDict['edition.draw.activate'],'info',true).attr('id','lizmap-edition-message');
                    }
                }
            }
