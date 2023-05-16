// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{
            "stylers": [{
                "saturation": -100
					}, {
                "gamma": 1
					}]
				}, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "off"
					}]
				}, {
            "featureType": "poi.business",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
					}]
				}, {
            "featureType": "poi.business",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
					}]
				}, {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.text",
            "stylers": [{

                "visibility": "off"
					}]
				}, {
            "featureType": "poi.place_of_worship",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
					}]
				}, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
					}]
				}, {
            "featureType": "water",
            "stylers": [{
                "visibility": "on"
					}, {
                "saturation": 50
					}, {
                "gamma": 0
					}, {
                "hue": "#5fb6c7"
					}]
				}, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#51596a"
					}]
				}, {
            "featureType": "road.local",
            "elementType": "labels.text",
            "stylers": [{
                "weight": 0.5
					}, {
                "color": "#51596a"
					}]
				}, {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [{
                "gamma": 1
					}, {
                "saturation": 10
					}]
				}]
    };


    var mapOptions2 = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#5fb6c7"
                    }]
                }, {
            "featureType": "administrative.province",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "lightness": "0"
                    }, {
                "saturation": "0"
                    }, {
                "color": "#f5f5f2"
                    }, {
                "gamma": "1"
                    }]
                }, {
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "lightness": "-3"
                    }, {
                "gamma": "1.00"
                    }]
                }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "poi.park",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#8dc6d3"
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "road",
            "elementType": "all",
            "stylers": [{
                "saturation": -100
                    }, {
                "lightness": 45
                    }, {
                "visibility": "simplified"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fac9a9"
                    }, {
                "visibility": "simplified"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [{
                "color": "#9099aa"
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#caced6"
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
                    }]
                }, {
            "featureType": "transit.station.airport",
            "elementType": "labels.icon",
            "stylers": [{
                "hue": "#0a00ff"
                    }, {
                "saturation": "-77"
                    }, {
                "gamma": "0.57"
                    }, {
                "lightness": "0"
                    }]
                }, {
            "featureType": "transit.station.rail",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#81473a"
                    }]
                }, {
            "featureType": "transit.station.rail",
            "elementType": "labels.icon",
            "stylers": [{
                "hue": "#f0ad4e"
                    }, {
                "lightness": "4"
                    }, {
                "gamma": "0.75"
                    }, {
                "saturation": "-68"
                    }]
                }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "color": "#eaf6f8"
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#c7eced"
                    }]
                }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [{
                "lightness": "-49"
                    }, {
                "saturation": "-53"
                    }, {
                "gamma": "0.79"
                    }]
                }]
    };


    var mapOptions3 = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{
            "featureType": "landscape",
            "stylers": [{
                "hue": "#f2e291"
                    }, {
                "saturation": 34
                    }, {
                "lightness": -2
                    }, {
                "gamma": 1
                    }]
                }, {
            "featureType": "road.highway",
            "stylers": [{
                "lightness": -18
                    }, {
                "gamma": 1
                    }]
                }, {
            "featureType": "road.arterial",
            "stylers": [{
                "hue": "#f2d750"
                    }, {
                "saturation": 8
                    }, {
                "lightness": -4
                    }, {
                "gamma": 1
                    }]
                }, {
            "featureType": "road.local",
            "stylers": [{
                "hue": "#5fb6c7"
                    }, {
                "saturation": 29
                    }, {
                "lightness": -38
                    }, {
                "gamma": 1
                    }]
                }, {
            "featureType": "water",
            "stylers": [{
                "hue": "#6697c2"
                    }, {
                "saturation": 0
                    }, {
                "lightness": 0
                    }, {
                "gamma": 1
                    }]
                }, {
            "featureType": "poi",
            "stylers": [{
                "hue": "#9ab946"
                    }, {
                "saturation": -30
                    }, {
                "lightness": -22
                    }, {
                "gamma": 1
                    }]
                }]
    };


    var mapOptions4 = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{
            "featureType": "all",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "simplified"
                    }, {
                "hue": "#ff7700"
                    }]
                }, {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "simplified"
                    }]
                }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#51596a"
                    }]
                }, {
            "featureType": "administrative.province",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "administrative.province",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ec971f"
                    }, {
                "weight": "5.00"
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#787878"
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
                    }, {
                "visibility": "on"
                    }, {
                "weight": "5.00"
                    }]
                }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "on"
                    }]
                }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "#30353e"
                    }]
                }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#ffffff"
                    }, {
                "visibility": "on"
                    }, {
                "weight": "5.00"
                    }]
                }, {
            "featureType": "administrative.land_parcel",
            "elementType": "geometry.fill",
            "stylers": [{
                "saturation": "64"
                    }]
                }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fafafa"
                    }]
                }, {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [{
                "color": "#30353e"
                    }]
                }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "#d5d5d5"
                    }]
                }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "#ff0000"
                    }]
                }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ec971f"
                    }]
                }, {
            "featureType": "road",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "#ffffff"
                    }, {
                "weight": "5.00"
                    }]
                }, {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ec971f"
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "#ec971f"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "labels.text",
            "stylers": [{
                "color": "#ffffff"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "#ec971f"
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#d9d9d9"
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "transit.station",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "simplified"
                    }, {
                "lightness": "4"
                    }, {
                "saturation": "-100"
                    }]
                }, {
            "featureType": "water",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#e1e1e1"
                    }, {
                "visibility": "on"
                    }]
                }]
    };


    var mapOptions5 = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York 
        styles: [{
            "featureType": "landscape.man_made",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ebeae3"
                    }]
                }, {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [{
                "color": "#9ab946"
                    }]
                }, {
            "featureType": "landscape.natural.terrain",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "poi.business",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "poi.government",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "poi.medical",
            "elementType": "geometry",
            "stylers": [{
                "color": "#fbd3da"
                    }, {
                "visibility": "off"
                    }]
                }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#8ba73f"
                    }]
                }, {
            "featureType": "poi.school",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fdea9b"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#f2d750"
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
                    }]
                }, {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "black"
                    }]
                }, {
            "featureType": "transit.station.airport",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#f0ad4e"
                    }]
                }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#226dad"
                    }]
                }]
    };


    var mapOptions6 = {
        zoom: 11,
        center: new google.maps.LatLng(40.6700, -73.9400), // New York
        styles: [{
            "featureType": "all",
            "elementType": "labels",
            "stylers": [{
                "visibility": "on"
                    }]
                }, {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#30353e"
                    }, {
                "lightness": 40
                    }]
                }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
                    }, {
                "color": "#30353e"
                    }, {
                "lightness": 16
                    }]
                }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#30353e"
                    }, {
                "lightness": 40
                    }]
                }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#30353e"
                    }, {
                "lightness": 10
                    }, {
                "weight": 1.2
                    }]
                }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#5fb6c7"
                    }]
                }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
                    }]
                }, {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#5fb6c7"
                    }]
                }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#9099aa"
                    }, {
                "lightness": 5
                    }]
                }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#30353e"
                    }, {
                "lightness": 30
                    }, {
                "visibility": "on"
                    }]
                }, {
            "featureType": "poi.business",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#5fb6c7"
                    }, {
                "lightness": "0"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "visibility": "off"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
                    }]
                }, {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#5fb6c7"
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#30353e"
                    }, {
                "lightness": 35
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#575757"
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#ffffff"
                    }]
                }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "color": "#9099aa"
                    }]
                }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
                    }, {
                "lightness": 5
                    }]
                }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [{
                "color": "#e3e5ea"
                    }]
                }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#30353e"
                    }, {
                "lightness": 19
                    }]
                }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#30353e"
                    }, {
                "lightness": 17
                    }]
                }]
    };


    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    var mapElement2 = document.getElementById('map2');
    var mapElement3 = document.getElementById('map3');
    var mapElement4 = document.getElementById('map4');
    var mapElement5 = document.getElementById('map5');
    var mapElement6 = document.getElementById('map6');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    var map2 = new google.maps.Map(mapElement2, mapOptions2);
    var map3 = new google.maps.Map(mapElement3, mapOptions3);
    var map4 = new google.maps.Map(mapElement4, mapOptions4);
    var map5 = new google.maps.Map(mapElement5, mapOptions5);
    var map6 = new google.maps.Map(mapElement6, mapOptions6);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Snazzy!'
    });
}