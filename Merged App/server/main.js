import { Meteor } from 'meteor/meteor';

//Meteor.startup(() => {
  // code to run on server at startup
//});

Meteor.startup(function() {

    return Meteor.methods({

      removeAllPosts: function() {

      console.log("Serveur clean device");
        Devices.remove({});

      },
      removeAllColis: function() {

      console.log("Serveur clean colist");
        CoListe.remove({});

      }

    });

  });
