Template.navBar.helpers({
	/*'isPage': function(page){
		return page === Session.get('page');
	},*/
	'objectInArray': function() {
		return [
			{name:"Home",icon:"glyphicon glyphicon-home",age:100},
			{name:"Colis",icon:"glyphicon glyphicon-barcode",age:200},
			{name:"Devices",icon:"glyphicon glyphicon-saved",age:200},
			{name:"Watch",icon:"glyphicon glyphicon-bell",age:200},
			{name:"Disconnect",icon:"glyphicon glyphicon-off",age:200}
		];
	}
});

Template.navBar.events({
  'click .navLink': function(event){
		if(event.target.getAttribute('data-targetname') === "Disconnect") {
			Meteor.logout(function(error) {
				if(error)
					console.log(error.reason);
			});
		}
		else
			Session.set('page', event.target.getAttribute('data-targetname'));
	}
});

Template.registerHelper( 'isPage', (page) => {
  return page === Session.get('page');
});