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
		Session.set('page', 'Home');
		Meteor.call('removeAllPosts');
		Meteor.call('removeAllColis');
		Devices.insert({name: "device1", state: "Started", packagename: "com..."});
		Devices.insert({name: "device2", state: "Started", packagename: "com2..."});
		Devices.insert({name: "device3", state: "Not started", packagename: "com3..."});
		Devices.insert({name: "device4", state: "Not started", packagename: "com4..."});
		Devices.insert({name: "device5", state: "Initializing", packagename: "com5..."});
		
		/*CoListe.insert({name: "ArduinoPackage", state: "Treatment", lastX: 52.9, lastY: 56.4});
		CoListe.insert({name: "AnotherPackage", state: "Treatment", lastX: 56.4, lastY: 59.6});*/
		CoListe.insert({
			name: "ArduinoBoard",
			tag: "QRTag",
			depart: [52.9, 56.4],
			destination: [56.4, 59.6],
			itineraire: [54.4, 56.6],
			date: "04/04/2017 17:20",
			proprietaire: 0,
			valide: true
		});
		CoListe.insert({
			name: "ArduinoBoard",
			tag: "QRTag",
			depart: [62.9, 66.4],
			destination: [66.4, 69.6],
			itineraire: [66.4, 69.6],
			date: "01/04/2017 17:20",
			proprietaire: 0,
			valide: false
		});
});







































