import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Accounts } from 'meteor/accounts-base';
import { Meteor } from 'meteor/meteor';
 
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

import './main.html';

Meteor.startup(() => {
  // code to run on server at startup
  console.log("grospenis");
  for(var i=0;i<10;i++) console.log(" ");
  if(Meteor.isCordova){
  	console.log(WebIntent);
  	console.log("coucou");
  	//sconsole.log(Grospenis);
  	for(var propertyName in cordova.WebIntent){
  		console.log(propertyName);
  	}
  	console.log("coucou2");
  	/*cordova.exec(function(args) {
		console.log("edoicezsdoxks");
        	}, function(args) {
            	console.log(args);
        	}, 'WebIntent', 'startActivity', [action: 'android.intent.action.VIEW', url: '', type: 'application/vnd.android.package-archive']);
  */
  cordova.WebIntent.startActivity({action:"android.intent.action.SEND"},function(){},function(){});
  	console.log(WebIntent);
    /*WebIntent.startActivity({
    action: WebIntent.ACTION_VIEW,
    url: 'geo:37,-122'},
    function() {},
    function() {alert('Failed to open URL via Android Intent')}
);*/
	}
});

Template.liste.helpers({
	'colis': function(){
		var currentUserId = Meteor.userId();
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
	'selectedDetails': function(){
		var selected_Details  = Session.get('selected_Details');
		return CoListe.findOne({_id: selected_Details});
	}
});

Template.login.helpers({
	'selectedSignIn': function(){
		var b = Session.get('selected_SignIn');
		return b;
	}
});
Template.logup.helpers({
	'selectedSignUp': function(){
		var b = Session.get('selected_SignUp');
		return b;
	}
});

Template.liste.events({
	'click .colis': function(){
		var x = Session.get('selected_Colis')
		if (x!=undefined){
			Session.set('selected_Colis', undefined);
			delete Session.keys.selected_Colis;
		}
		else{
			var colisId = this._id;
			Session.set('selected_Colis', colisId);
		}
	},
	'click .details': function(){
		var x = Session.get('selected_Details')
		if (x!=undefined){
			Session.set('selected_Details', undefined);
			delete Session.keys.selected_Details;
		}
		else{
			var selected_Colis = Session.get('selected_Colis');
			Session.set('selected_Details', selected_Colis);
		}	
	},
	'click .remove': function(){
		var selected_Colis = Session.get('selected_Colis');
		CoListe.remove({_id : selected_Colis});
	},
	'click .signout': function(event){
         		event.preventDefault();
		Meteor.logout(function(error) {
            		if(error) {
               			console.log("ERROR: " + error.reason);
            		}
         		});
	}
});

Template.login.events({
	'click .signin': function(){
		var x = Session.get('selected_SignIn')
		if (x!=undefined){
			Session.set('selected_SignIn', undefined);
			delete Session.keys.selected_SignIn;
		}
		else{
			Session.set('selected_SignIn', true);
		}
		var y = Session.get('selected_SignUp')
		if (y!=undefined){
			Session.set('selected_SignUp', undefined);
			delete Session.keys.selected_SignUp;
		}		
	}
});
Template.logup.events({
	'click .signup': function(){
		var x = Session.get('selected_SignUp')
		if (x!=undefined){
			Session.set('selected_SignUp', undefined);
			delete Session.keys.selected_SignUp;
		}
		else{
			Session.set('selected_SignUp', true);
		}
		var y = Session.get('selected_SignIn')
		if (y!=undefined){
			Session.set('selected_SignIn', undefined);
			delete Session.keys.selected_SignIn;
		}
	},
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