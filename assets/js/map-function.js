google.maps.event.addDomListener(window, 'load', init);

function init(){
	var map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: 40.422607,  lng: -74.513027},
	    zoom: 10,
	    scrollwheel: false,
	    styles: [
	    	{
				elementType: 'geometry',
				stylers: [{color: '#ededed'}]
			},
			{
				elementType: 'labels.icon',
				stylers: [{visibility: 'off'}]
			},
			{
				elementType: 'labels.text.fill',
				stylers: [{color: '#616161'}]
			},
			{
				elementType: 'labels.text.stroke',
				stylers: [{color: '#ededed'}]
			},
			{
				featureType: 'administrative.land_parcel',
				elementType: 'labels.text.fill',
				stylers: [{color: '#bdbdbd'}]
			},
			{
				featureType: 'poi',
				elementType: 'geometry',
				stylers: [{color: '#eeeeee'}]
			},
			{
				featureType: 'poi',
				elementType: 'labels.text.fill',
				stylers: [{color: '#757575'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'geometry',
				stylers: [{color: '#e5e5e5'}]
			},
			{
				featureType: 'poi.park',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9e9e9e'}]
			},
			{
				featureType: 'road',
				elementType: 'geometry',
				stylers: [{color: '#d3d3d3'}]
			},
			{
				featureType: 'road.arterial',
				elementType: 'labels.text.fill',
				stylers: [{color: '#757575'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'geometry',
				stylers: [{color: '#c9c9c9'}]
			},
			{
				featureType: 'road.highway',
				elementType: 'labels.text.fill',
				stylers: [{color: '#616161'}]
			},
			{
				featureType: 'road.local',
				elementType: 'labels.text.fill',
				stylers: [{color: '#9e9e9e'}]
			},
			{
				featureType: 'transit.line',
				elementType: 'geometry',
				stylers: [{color: '#e5e5e5'}]
			},
			{
				featureType: 'transit.station',
				elementType: 'geometry',
				stylers: [{color: '#eeeeee'}]
			},
			{
				featureType: 'water',
				elementType: 'geometry',
				stylers: [{color: '#bdbdbd'}]
			},
			{
				featureType: 'water',
				elementType: 'labels.text.fill',
				stylers: [{color: '#ffffff'}]
			}
	    ]
	});

	var marker = new google.maps.Marker({
		position: {lat: 40.422607,  lng: -74.513027},
	    map: map,
	    icon: 'assets/images/marker.png'
	});
}