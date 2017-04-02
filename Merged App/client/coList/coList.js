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
		if ($target != 'tous') {
			$('.table tr').css('display', 'none');
			$('.table tr[data-status="' + $target + '"]').fadeIn('slow');
		} else {
			$('.table tr').css('display', 'none').fadeIn('slow');
		}
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
	}
});