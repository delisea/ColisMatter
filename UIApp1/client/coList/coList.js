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
			Session.set('coList_create', true);
		} else {
			$('.table tr').css('display', 'none');
			$('.table tr[data-status="' + $target + '"]').fadeIn('slow');
		}
	},
	'click .coList_registerCancel': function(event) {
		Session.set('coList_create', false);
	},
	'submit': function(event){
		var today = new Date();
		var ITID = Itinerraires.insert({
			Date: (today.getDate()+'/'+(toaday.getMonth()+1)+'/'+today.getFullYear()) + ' ' + today.getHours() + ':' + today.getMinutes(),
			Descriptif: e.target.ShippingAddress.value,
			Coordinates: Geolocation.currentLocation().coords
		});
		CoListe.insert({
			Name: e.target.PackageName.value,
			/*tag: e.target.DeliveryAddress.value,*/
			Depart: Meteor.user().adress,
			Destination: e.target.DeliveryAddress.value,
			ReceiverName: e.target.ReceiverName.value,
			Itineraire: ITID,
			DateCreation: (today.getDate()+'/'+(toaday.getMonth()+1)+'/'+today.getFullYear()) + ' ' + today.getHours() + ':' + today.getMinutes(),
			Proprietaire: Meteor.userId(),
			Valide: true
		});
	}
});

Template.coList.helpers({
	'colis': function(){
		var currentUserId = Meteor.userId();
		return CoListe.find({ proprietaire: 0});
		
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
		if(dest[0] == it[0] && dest[1] == it[1]) {
			return "livre";
		}
		return "transit";
	},
	'isNotCreating': function() {
		return !Session.get("coList_create");
	}
});