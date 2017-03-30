import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

Session.setDefault('deviceList_Selected', "");

Meteor.startup(() => {
		Meteor.call('removeAllPosts');
		Devices.insert({name: "device1", state: "Started", packagename: "com..."});
		Devices.insert({name: "device2", state: "Started", packagename: "com2..."});
		Devices.insert({name: "device3", state: "Not started", packagename: "com3..."});
		Devices.insert({name: "device4", state: "Not started", packagename: "com4..."});
		Devices.insert({name: "device5", state: "Initializing", packagename: "com5..."});
});

var deviceList_Selected = "";
Template.deviceList.helpers({
	'devices': function(){
		return Devices.find({});
	},
	'isStarted': function (state) {
		return state === "Started";
	},
	'isWaiting': function (state) {
		return state === "Initializing";
	},
	'isClosed': function (state) {
		return state === "Not started";
	},
	'isSelected': function (name) {console.log(deviceList_Selected);
		return name === Session.get('deviceList_Selected');
	}
});
Template.deviceList.events({
  'click .ONdevice': function(event){
		alert("ON " + event.target.getAttribute('data-targetname'));
	},
	'click .OFFdevice': function(event){
		alert("OFF " + event.target.getAttribute('data-targetname'));
	},
	'click .INFOdevice': function(event){
		if(event.target.getAttribute('data-targetname') !== Session.get('deviceList_Selected'))
			Session.set('deviceList_Selected', event.target.getAttribute('data-targetname'));
		else
			Session.set('deviceList_Selected', "");
	}
});