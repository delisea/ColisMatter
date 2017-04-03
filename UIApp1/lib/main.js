/*
	_ID,
	Nom,
	Tag,
	Depart,
	Destination,
	DateCreation,
	Propriétaire:	_idUser,
	Valide:			Boolean
*/
CoListe = new Mongo.Collection('colis');


Devices = new Meteor.Collection('devices', {
  transform: function(x) {
    var y = _.extend({}, x);
    y.handler = new Function("return " + x.handler)();
    return y;
  }
});

/*
	_id,
	Date,
	Descriptif,
	Coordinates
*/
Itineraires = new Mongo.Collection('itineraires');

/*
	_id,
	Tag,
	Descriptif,
	AbsentDepuis: _idIt,
	RetrouveA:    _idIt,
	Colis:		  _idColis
*/
Articles = new Mongo.Collection('articles');