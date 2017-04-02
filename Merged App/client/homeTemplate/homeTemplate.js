Meteor.startup(function() {
  /*$(window).resize(function() {
    $('#map').css('height', window.innerHeight - 82 - 45);
  });*/
  $(window).resize(); // trigger resize event 
});
 
// create marker collection
var Markers = new Meteor.Collection('markers');

Meteor.subscribe('markers');
var map;
var markers;

var geoFitBounds = function(map, bbox) {
        var b = L.latLngBounds(bbox);
            pb = L.bounds(map.project(b.getSouthWest()), map.project(b.getNorthEast())),
            z = map.getBoundsZoom(b),
            c = b.getCenter(),
            pc = map.unproject(pb.getCenter());

        map.setView(pc, z);
        return map;
    };

var supportsOrientationChange = "onorientationchange" in window,
    orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

window.addEventListener(orientationEvent, function() {
    //console.log('HOLY ROTATING SCREENS BATMAN:' + window.orientation + " " + screen.width);
	
	/*map.fitBounds([
		[45.1667, 5.7667],
		[45.184394, 5.752884]
	], {paddingTopLeft: [0, $(".table-cell").outerHeight()]});*/
	//map.fitBounds(markers.getBounds().pad(0.5));
	//console.log($(".table-cell").outerHeight());
	/*console.log($("#map").outerHeight());
	map.fitBounds(markers.getBounds().pad(0.25));*/
	
	geoFitBounds(map, markers.getBounds().pad(1));
}, false);

Template.homeTemplate.rendered = function() {
  L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';
  
  Markers.insert({latlng: L.latLng(45.1667, 5.7667)});
  Markers.insert({latlng: L.latLng(45.184394, 5.752884)});

  map = L.map('map', {
    doubleClickZoom: false
  });//.setView([49.25044, -123.137], 13);
	//console.log();
  
  /*map.fitBounds([
		[45.1667, 5.7667],
		[45.184394, 5.752884]
	], {paddingTopLeft: [0, $(".table-cell").outerHeight()]});*/
	
	console.log($(".table-cell").outerHeight());
	

  L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

  map.on('dblclick', function(event) {
    Markers.insert({latlng: event.latlng});
  });

  // add clustermarkers
  markers = L.markerClusterGroup();
  map.addLayer(markers);

  var query = Markers.find();
  query.observe({
    added: function (document) {
      var marker = L.marker(document.latlng).addTo(map)
        .on('click', function(event) {
          map.removeLayer(marker);
          Markers.remove({_id: document._id});
        });
       markers.addLayer(marker);
    },
    removed: function (oldDocument) {
      layers = map._layers;
      var key, val;
      for (key in layers) {
        val = layers[key];
        if (val._latlng) {
          if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
            //map.removeLayer(val);
          }
        }
      }
    }
  });
	geoFitBounds(map, markers.getBounds().pad(1));
};