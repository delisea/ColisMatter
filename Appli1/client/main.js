import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

import './main.html';

Template.liste.helpers({
	'colis': function(){
		var currentUserId = Meteor.userId();
		console.log(!!window.cordova);
		console.log("yo");
		return CoListe.find({ createdBy: currentUserId}, {sort: {score: -1, name: 1}});
	},
	'selectedClass': function(){
		var colisId = this._id;
		var selected_Colis = Session.get('selected_Colis');
		if(colisId == selected_Colis){
			return "selected";
		}
	},
	'selectedColis': function(){
		var selected_Colis = Session.get('selected_Colis');
		return CoListe.findOne({ _id: selected_Colis });
	},
	'mapa': function(){
		return 0;
	}
});

Template.liste.events({
	'click .colis': function(){
		var colisId = this._id;
		Session.set('selected_Colis', colisId);
		Session.set('selected_Details', 0);
	},
	'click .details': function(){ //A transformer en bouton détails qui affiche les détails du colis
		var selected_Colis = Session.get('selected_Colis');
		
	},
	'click .historique': function(){ //A transformer en bouton historique qui affiche l'hsitorique
		var selected_Colis = Session.get('selected_Colis');
		CoListe.update({_id: selected_Colis}, {$inc: {score : -5}});	
	},
	'click .remove': function(){
		var selected_Colis = Session.get('selected_Colis');
		CoListe.remove({_id : selected_Colis});
	}
});

Template.addColisForm.events({
	'submit form': function(e){
		e.preventDefault();
		var colisNameVar = e.target.colisName.value;
		var colisSrcVar = e.target.lieuCreation.value;
		var colisDstVar = e.target.lieuDestination.value;
		var currentUserId = Meteor.userId();
		var today = new Date();
		var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
		var time = today.getHours() + ":" + today.getMinutes();
		var liste = new String("");
		liste = 
		CoListe.insert({
			NameColis: colisNameVar,
			LieuDeCreation: colisSrcVar,
			Destination: colisDstVar,
			DateCreation: date+' '+time,
			createdBy: currentUserId,
			Content: liste
		});
		event.target.colisName.value="";
		/*
		window.cordova.startActivity({
			action: WebIntent.ACTION_VIEW},
			function() {alert('Bonjour');},
			function(e) {alert('Bonjour2');}
		);
		*/
	}
});
/*
if (Meteor.isClient) {
    L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';
    var map = L.map('map');
  }
  if (Meteor.isClient) {
    L.tileLayer.provider('Stamen.Watercolor').addTo(map);
  }*/
/* Un colis
*_id
*CreatedBy
*NameColis
*DateCreation
*LieuDeCreation //A améliorer~
Content -> liste d'objets (liste de codes RFID)
*Destination
*/

/* Les contenus
_id
Colis
NameContent
*/

/* Les utilisateurs
_id
Name
Colis
*/













Meteor.startup(function() {
  /*$(window).resize(function() {
    $('#map').css('height', window.innerHeight - 82 - 45);
  });*/
  $(window).resize(); // trigger resize event 
});
 
// create marker collection
var Markers = new Meteor.Collection('markers');

Meteor.subscribe('markers');

Template.mapa.rendered = function() {
  L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';

  var map = L.map('map', {
    doubleClickZoom: false
  }).setView([49.25044, -123.137], 13);

  L.tileLayer.provider('OpenStreetMap.Mapnik').addTo(map);

  map.on('dblclick', function(event) {
    Markers.insert({latlng: event.latlng});
  });

  // add clustermarkers
  var markers = L.markerClusterGroup();
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
};