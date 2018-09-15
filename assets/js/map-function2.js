google.maps.event.addDomListener(window, 'load', init);

 	function init(){
 		var map = new google.maps.Map(document.getElementById('map2'), {
	        center: {lat: 40.422607,  lng: -74.513027},
	        zoom: 10,
	        scrollwheel: false,
	    });

		var marker = new google.maps.Marker({
			position: {lat: 40.422607,  lng: -74.513027},
		    map: map,
		    icon: 'assets/images/marker.png'
		});
 	}