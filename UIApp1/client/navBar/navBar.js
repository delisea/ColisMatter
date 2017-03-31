Template.navBar.helpers({
	/*'isPage': function(page){
		return page === Session.get('page');
	},*/
	'objectInArray': function() {
		return [
			{name:"Home",last:"Home",age:100},
			{name:"Colis",last:"page1",age:200},
			{name:"Devices",last:"page2",age:200}
		];
	}
});

Template.navBar.events({
  'click .navLink': function(event){
		Session.set('page', event.target.getAttribute('data-targetname'));
	}
});

Template.registerHelper( 'isPage', (page) => {
  return page === Session.get('page');
});