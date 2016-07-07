lizMap.events.on({
    
	'lizmapeditionfeaturecreated': function(r) {

	var lay = 'poly_test';	//layer name to redraw
	var mLayers = lizMap.layers;
	
		for(var a = 0; a < mLayers.length; a++ ){
		    if (mLayers[a].name == lay ) {
			mLayers[a].redraw(true);
		    }; //end if
		}; //end for
	} //end function
}); //end lizmap.events.on
