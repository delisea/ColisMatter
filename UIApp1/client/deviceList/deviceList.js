var deviceList_Selected = "";
Template.deviceList.helpers({
	'devices': function(){
		return Devices.find({});
	},
	'isStarted': function (state) {
		return state === "Started";
	},
	'isWaiting': function (state) {
		return state === "Initializing";
	},
	'isClosed': function (state) {
		return state === "Not started";
	},
	'isSelected': function (name) {console.log(deviceList_Selected);
		return name === Session.get('deviceList_Selected');
	}
});
Template.deviceList.events({
	'click .Refresh' : function() {
		if(Meteor.isCordova){
			
			cordova.WebIntent.search(function(ret){
				console.log(ret);
				var t = JSON.parse(ret);
				Meteor.call('removeAllPosts');
				for(var i  in t) {
					console.log(t[i]);
					Devices.insert({name: t[i].name,
						packageName: t[i].packageName,
						handler: (function(args){watchColis(args);}).toString(),
						state: "Not started"});
					
					
					/*JSONArray array;
for(int n = 0; n < array.length(); n++)
{
    JSONObject object = array.getJSONObject(n);
    // do some stuff....
}*/
				}
			});
		}
	},
	'click .ONdevice': function(event){
		console.log("ON" + event.target.getAttribute('data-targetname'));
		var target = Devices.find({'name':event.target.getAttribute('data-targetname')}, {}).fetch()[0];
		console.log(target);
		//target.handler("test");
		Devices.update({_id : target._id},{$set:{state : "Initializing"}});
		if(Meteor.isCordova)
			cordova.WebIntent.startreader(function(args){
				var t = JSON.parse(args);
				var tgt = Devices.find({name:t['name']}, {}).fetch()[0];
				
				//
				if(t['type'] == 'status') {
					Devices.update({_id : tgt._id},{$set:{state : t['type']}});
				}
				else if(t['type'] == 'push') {
					for(i in tgt)
					console.log(i);
					console.log(tgt.handler);
					tgt.handler(t['value']);
				}
				/*for(var i  in t) {
					//console.log(t[i]);
					Devices.insert({name: t[i]});
				}*/
				//console.log(t['name']);
				//console.log(Devices.find({'name':t['name']}, {}).fetch()[0]);
				//for(var i in Devices.find({'name':t['name']}, {}).fetch()[0])
				//	console.log(i);
				
			},target.name);
	},
	'click .OFFdevice': function(event){
		//alert("OFF " + event.target.getAttribute('data-targetname'));
		console.log("OFF" + event.target.getAttribute('data-targetname'));
	},
	'click .INFOdevice': function(event){
		if(event.target.getAttribute('data-targetname') !== Session.get('deviceList_Selected'))
			Session.set('deviceList_Selected', event.target.getAttribute('data-targetname'));
		else
			Session.set('deviceList_Selected', "");
	}
});