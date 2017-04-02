import { Accounts } from 'meteor/accounts-base';

/*Template.registerHelper( 'isConnected', (page) => {
  return Session.get('connected');
});*/


Template.connectform.events({
	'click #register-form-link': function(e) {
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	},
	'click #login-form-link': function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	},
	'submit #login-form': function(e){
		e.preventDefault();
		var username = e.target.username.value;
		var mdp = e.target.password.value;
		Meteor.loginWithPassword(username, mdp, function(error){
          console.log(error);
        });
		//Session.set('connected', true);
	},
	'submit #register-form': function(e){
		console.log(e.target.id);
		e.preventDefault();
		var username = e.target.username.value;
		var mdp = e.target.password.value;
		var cmdp = e.target["confirm-password"].value;
		var email = e.target.password.value;
		var address = e.target.address.value;
		if(cmdp !== mdp) {
			console.log("mdp pas bon");
			console.log(mdp);
			console.log(cmdp);
			return;
		}
		
		Accounts.createUser({
            username: username,
            email: email,
            password: mdp,
			address: address
          },function(error){console.log("error");if(error)console.log(error);});
		  console.log("done");
	}
});