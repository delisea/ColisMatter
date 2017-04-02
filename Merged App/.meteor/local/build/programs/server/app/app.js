var require = meteorInstall({"lib":{"main.js":function(){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// lib/main.js                                                       //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
CoListe = new Mongo.Collection('coliste');                           // 1
Devices = new Mongo.Collection('devices');                           // 2
///////////////////////////////////////////////////////////////////////

}},"server":{"main.js":["meteor/meteor",function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
var Meteor = void 0;                                                 // 1
module.import('meteor/meteor', {                                     // 1
  "Meteor": function (v) {                                           // 1
    Meteor = v;                                                      // 1
  }                                                                  // 1
}, 0);                                                               // 1
//Meteor.startup(() => {                                             // 3
// code to run on server at startup                                  // 4
//});                                                                // 5
Meteor.startup(function () {                                         // 7
  return Meteor.methods({                                            // 9
    removeAllPosts: function () {                                    // 11
      console.log("Serveur clean device");                           // 13
      Devices.remove({});                                            // 14
    },                                                               // 16
    removeAllColis: function () {                                    // 17
      console.log("Serveur clean colist");                           // 19
      CoListe.remove({});                                            // 20
    }                                                                // 22
  });                                                                // 9
});                                                                  // 26
///////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/main.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
