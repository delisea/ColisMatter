
/* watcher
	colis: _id
	seen: [_idArt list]
	missing: [_idArt list]
	last_edited
*/

Template.watchColis.helpers({
	'coliseen': function(){
		//console.log(watcher);
		//Session.set('nseen', false);
		return watcher.find({});
	},
	'isSelected': function(name){
		return false;
	},
	'getState': function(seen, missing) {
		if(missing == 0)
			return "success";
		else
			return "warning";
	},
	'nseen': function(seen) {
		/*console.log(seen);
		console.log(seen.length);*/
		return seen.length;
	},
	'nmissing': function(missing) {
		return missing.length;
	}
});

Template.watchColis.events({
	'click .scanner': function(event){
		watchColis("tag"+(Math.round(Math.random()*6)+1));//Math.random()
	},
	'click .DEL_colis': function(event) {
		watcher.remove(event.target.getAttribute('data-targetname'));
	}
});