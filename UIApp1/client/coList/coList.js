/*$(document).ready(function () {

    $('.ckbox label').on('click', function () {
      $(this).parents('tr').toggleClass('selected');
    });

    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
	  console.log($target);
      if ($target != 'all') {
        $('.table tr').css('display', 'none');
        $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.table tr').css('display', 'none').fadeIn('slow');
      }
    });

 });*/

Template.coList.events({
	'click .ckbox label': function(event, t){
		//console.log(event.target);
		//event.target.parents('tr').toggleClass('selected');
		$(event.currentTarget).parent().parent().parent().toggleClass('selected');
	},
	'click .btn-filter': function(event, t){
		console.log("ON" + event.target.getAttribute('data-target'));
		var $target = event.target.getAttribute('data-target');
		if ($target == 'tous') {
			$('.table tr').css('display', 'none').fadeIn('slow');
		} else if($target == 'create') {
			Session.set('coList_state', 1);
		} else {
			$('.table tr').css('display', 'none');
			$('.table tr[data-status="' + $target + '"]').fadeIn('slow');
		}
	},
	'click .coList_registerCancel': function(event) {
		Session.set('coList_state', 0);
	},
	'submit': function(e, t){
		e.preventDefault();
		var userGeoLocation = new ReactiveVar(null);

		Tracker.autorun(function (computation) {
		  userGeoLocation.set(Geolocation.currentLocation());
		  if (userGeoLocation.get()) {console.log(userGeoLocation.get());
			//stop the tracker if we got something
			computation.stop();
			
			
			var today = new Date();
			t.ITID = /*Itinerraires.insert(*/{
				Date: (today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()) + ' ' + today.getHours() + ':' + today.getMinutes(),
				Descriptif: Meteor.user().profile.address,
				Coordinates: userGeoLocation.get().coords
			};
			t.colis = /*CoListe.insert(*/{
				Nom: e.target.PackageName.value,
				/*tag: e.target.DeliveryAddress.value,*/
				Depart: Meteor.user().profile.address,
				Destination: e.target.DeliveryAddress.value,
				ReceiverName: e.target.ReceiverName.value,
				Itineraire: 0/*ITID*/,
				DateCreation: (today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear()) + ' ' + today.getHours() + ':' + today.getMinutes(),
				Proprietaire: Meteor.userId(),
				Valide: true
			};
			
			Devices.update({'name': e.target.deviceSelected.value}, {$set:{handler: function(tag){
				t.article_reg.insert({Tag: tag,
							Descriptif: "",
							AbsentDepuis: undefined,
							RetrouveA: undefined,
							Colis: 0});
			}}});
			Session.set('coList_state', 2);
		  }
		});
	},
	'click .btnscan': function(event, t) {
		t.article_reg.insert({Tag: "ici un tag"+Math.random(),
							Descriptif: "",
							AbsentDepuis: undefined,
							RetrouveA: undefined,
							Colis: 0});
	},
	'click .btnsetDesc': function(event, t) {
		var target = $("#"+event.target.getAttribute('data-target'))[0];
		t.article_reg.update({Tag : event.target.getAttribute('data-target')}, {$set:{Descriptif : target.value}});
		target.placeholder = target.value;
		target.value = "";
	},
	'click .coList_registerDel': function(event, t) {
		var target = $("#"+event.target.getAttribute('data-target'))[0];
		t.article_reg.remove(event.target.getAttribute('data-target'));
		target.parent.parent.parent.removeChild(target.parent.parent);
	},
	'click .coList_registerEnd': function(event, t) {
		var ITID = Itineraires.insert(t.ITID);
		t.colis.Itineraire = ITID;
		var colis = CoListe.insert(t.colis);
		for(var art in t.article_reg.find({})) {
			art.Colis = colis;
			Articles.insert(art);
		}
		
		t.article_reg = new Mongo.Collection(null);
		t.colis = null;
		t.ITID = null;
		Session.set('coList_state', 0);
	}
});

Template.coList.helpers({
	'colis': function(){
		var currentUserId = Meteor.userId();
		console.log(CoListe.find({}));
		return CoListe.find({}/*{ proprietaire: 0}*/);
		
			/*name: "ArduinoBoard",
			tag: "QRTag",
			depart: [62.9, 66.4],
			destination: [66.4, 69.6],
			itineraire: [66.4, 69.6],
			date: "01/04/2017 17:20",
			proprietaire: 0,
			valide: false*/
	},
	'delivered': function(dest, it) {
		/*if(dest[0] == it[0] && dest[1] == it[1]) {
			return "livre";
		}*/
		return "transit";
	},
	'isNotCreating': function() {
		return Session.get("coList_state") == 0;
	},
	'isNotRegistering': function() {
		return Session.get("coList_state") < 2;
	},
	'article_reg': function(){
		return Template.instance().article_reg.find({});
	},
	'devices': function(){
		return Devices.find({});
	},
	'isDisabled': function(status){
		if(status != "Started")
			return "disabled";
	}
});

Template.coList.onCreated(function(){
	function createCollection(name){
		for (globalVal in global){
			if(global[globalVal] instanceof Mongo.Collection){
				if (global[globalVal]._name == name)
					return global[globalVal];
			}
		}
		return new Mongo.Collection(name);
	}
	
	
	this.article_reg = createCollection(null);
	//console.log(this);console.log(Template.coList);
});

























