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
		if ($target != 'all') {
			$('.table tr').css('display', 'none');
			$('.table tr[data-status="' + $target + '"]').fadeIn('slow');
		} else {
			$('.table tr').css('display', 'none').fadeIn('slow');
		}
	}
});