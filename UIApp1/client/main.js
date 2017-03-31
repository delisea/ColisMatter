import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Session.setDefault('deviceList_Selected', "");

///TODO fix navBar responsivess


// TODO:
// Remember me?
// Forgot password
// Connect
// Subscribe

// do better startup()
// Global for( fct in Meteor.perso.startup) fct();    ???

Meteor.startup(() => {
		Session.set('connected', false);
		Session.set('page', 'Home');
		Meteor.call('removeAllPosts');
		Devices.insert({name: "device1", state: "Started", packagename: "com..."});
		Devices.insert({name: "device2", state: "Started", packagename: "com2..."});
		Devices.insert({name: "device3", state: "Not started", packagename: "com3..."});
		Devices.insert({name: "device4", state: "Not started", packagename: "com4..."});
		Devices.insert({name: "device5", state: "Initializing", packagename: "com5..."});
});







































