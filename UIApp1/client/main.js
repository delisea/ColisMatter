import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Session.setDefault('deviceList_Selected', "");

///TODO fix navBar responsivess


// TODO:
// Remember me?
// Forgot password
// after disco can't register
// table des suivis

// do better startup()
// Global for( fct in Meteor.perso.startup) fct();    ???

Meteor.startup(() => {
		Session.set('connected', false);
		Session.set('coList_state', 0);
		Session.set('page', 'Home');
		Meteor.call('removeAllPosts');
		Meteor.call('removeAllColis');
		Devices.insert({name: "device1", state: "Started", packagename: "com...", handler: (function(args){console.log(args);}).toString()});
		Devices.insert({name: "device2", state: "Started", packagename: "com2...", handler: (function(args){console.log(args);}).toString()});
		Devices.insert({name: "device3", state: "Not started", packagename: "com3...", handler: (function(args){console.log(args);}).toString()});
		Devices.insert({name: "device4", state: "Not started", packagename: "com4...", handler: (function(args){console.log(args);}).toString()});
		Devices.insert({name: "device5", state: "Initializing", packagename: "com5...", handler: (function(args){console.log(args);}).toString()});
		
		
		/*CoListe.insert({name: "ArduinoPackage", state: "Treatment", lastX: 52.9, lastY: 56.4});
		CoListe.insert({name: "AnotherPackage", state: "Treatment", lastX: 56.4, lastY: 59.6});*/
		/*
			_ID,
			Nom,
			Tag,
			Depart,
			Destination,
			DateCreation,
			Proprietaire:	_idUser,
			Valide:			Boolean
		*/
		var col2 = CoListe.insert({
			Nom: "ArduinoBoard",
			Tag: "QRTag",
			Depart: [52.9, 56.4],
			Destination: [56.4, 59.6],
			itineraire: [54.4, 56.6],
			DateCreation: "04/04/2017 17:20",
			Proprietaire: 0,
			Valide: true
		});
		var col = CoListe.insert({
			Nom: "ArduinoBoard",
			Tag: "QRTag",
			Depart: [62.9, 66.4],
			Destination: [66.4, 69.6],
			itineraire: [66.4, 69.6],
			DateCreation: "01/04/2017 17:20",
			Proprietaire: 0,
			Valide: false
		});
		/*
			_id,
			Tag,
			Descriptif,
			AbsentDepuis: _idIt,
			RetrouveA:    _idIt,
			Colis:		  _idColis
		*/
		Articles.insert({
			Tag: "tag"+1,//Math.round(Math.random()*10),
			Descriptif: "",
			AbsentDepuis: undefined,
			RetrouveA: undefined,
			Colis: col
		});
		Articles.insert({
			Tag: "tag"+2,//Math.round(Math.random()*10),
			Descriptif: "",
			AbsentDepuis: undefined,
			RetrouveA: undefined,
			Colis: col
		});
		Articles.insert({
			Tag: "tag"+3,//Math.round(Math.random()*10),
			Descriptif: "",
			AbsentDepuis: undefined,
			RetrouveA: undefined,
			Colis: col
		});
		
		
		Articles.insert({
			Tag: "tag"+4,//Math.round(Math.random()*10),
			Descriptif: "",
			AbsentDepuis: undefined,
			RetrouveA: undefined,
			Colis: col2
		});
		Articles.insert({
			Tag: "tag"+5,//Math.round(Math.random()*10),
			Descriptif: "",
			AbsentDepuis: undefined,
			RetrouveA: undefined,
			Colis: col2
		});
		Articles.insert({
			Tag: "tag"+6,//Math.round(Math.random()*10),
			Descriptif: "",
			AbsentDepuis: undefined,
			RetrouveA: undefined,
			Colis: col2
		});
		
		
		
		
		
		watcher = new Mongo.Collection(null);
		/* watcher
			colis: _id
			seen: [_idArt list]
			missing: [_idArt list]
			last_edited
		*/
		watchColis = function(tag){console.log(tag);
			var parentID = Articles.findOne({Tag: tag}).Colis;
			var today = new Date();
			var lastedit = (today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()) + ' ' + today.getHours() + ':' + today.getMinutes();
			var par = watcher.findOne({colis: parentID});
			if(par == undefined) {
				var mis = [];
				var t = Articles.find({Tag: {$ne: tag}, Colis: parentID}, {fields: {Tag: 1}}).fetch();
				for(var i in t) {console.log(t[i]);
					mis.push(t[i].Tag);
				}
				watcher.insert({
					colis: parentID,
					seen: [tag],
					missing: mis,
					last_edited: lastedit
				});
			}
			else {
				console.log(par);console.log(2);
				var pos = par.missing.indexOf(tag);
				// if not missing, already seen or error
				if(pos == -1)
					return;
				console.log("cont");
				par.missing.splice(pos, 1);
				par.seen.push(tag);
				watcher.update({_id : par._id}, {$set:{seen : par.seen, missing : par.missing}});
				if(par.missing.length == 0) {
					console.log("auto-send");
				}
			}
		};
});





































