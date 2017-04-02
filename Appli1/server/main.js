import { Meteor } from 'meteor/meteor';
import {Email} from 'meteor/email';

Meteor.startup(() => {
  // code to run on server at startup
});


process.env.MAIL_URL = "smtp://postmaster%40sandboxf3056ce5dbb24b55876acab9a1a5911a.mailgun.org:07fb7d871425a461e6c129271432557f@smtp.mailgun.org:587";
/*
SSR.compileTemplate('htmlEmail', Assets.getText('email-missing-article.html'));

var emailData = {
	//name: ,
};

Email.send({
  to: "to.address@email.com",
  from: "from.address@email.com",
  subject: "Example Email",
  html: SSR.render('htmlEmail', emailData),
});*/
/*
Email.send({
  to: "therugbykiller@gmail.com",
  from: "amodrufavin.hugo@gmail.com",
  subject: "grospenis",
  html: "<p><strong>grospenis</strong></p>",
});*/


Meteor.methods({
  sendEmail(to, from, subject, html) {
    this.unblock();
    Email.send({ to, from, subject, html });
  }
});