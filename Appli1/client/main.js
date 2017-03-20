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
	'click .details': function(){ //A transformer en bouton détails qui affiche les détails du colis
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