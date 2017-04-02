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


Devices = new Mongo.Collection('devices');

/*
	_id,
	Date,
	Descriptif,
	Coordinates
*/
Itinerraires = new Mongo.Collection('itinerraires');

/*
	_id,
	Tag,
	Descriptif,
	AbsentDepuis: _idIt,
	RetrouveA:    _idIt,
	Colis:		  _idColis
*/
Articles = new Mongo.Collection('articles');