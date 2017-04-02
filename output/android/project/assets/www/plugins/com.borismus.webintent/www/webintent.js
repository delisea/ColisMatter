cordova.define("com.borismus.webintent.WebIntent", function(require, exports, module) {
/**
 * cordova Web Intent plugin
 * Copyright (c) Boris Smus 2010
 *
 */
 (function(cordova2){
    var WebIntent = function() {

    };
	

    WebIntent.search = function(callback) {
        return cordova.exec(function(args) {
            callback(args);
        }, function(args) {
        }, 'WebIntent', 'search', []);
    };


    WebIntent.ACTION_SEND = "android.intent.action.SEND";
    WebIntent.prototype.ACTION_VIEW= "android.intent.action.VIEW";
    WebIntent.prototype.EXTRA_TEXT = "android.intent.extra.TEXT";
    WebIntent.prototype.EXTRA_SUBJECT = "android.intent.extra.SUBJECT";
    WebIntent.prototype.EXTRA_STREAM = "android.intent.extra.STREAM";
    WebIntent.prototype.EXTRA_EMAIL = "android.intent.extra.EMAIL";
    WebIntent.prototype.ACTION_CALL = "android.intent.action.CALL";
    WebIntent.prototype.ACTION_SENDTO = "android.intent.action.SENDTO";

    WebIntent.startActivity = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'startActivity', [params]);
    };

    WebIntent.prototype.hasExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'hasExtra', [params]);
    };

    WebIntent.prototype.getUri = function(success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'getUri', []);
    };

    WebIntent.prototype.getExtra = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'getExtra', [params]);
    };


    WebIntent.prototype.onNewIntent = function(callback) {
        return cordova.exec(function(args) {
            callback(args);
        }, function(args) {
        }, 'WebIntent', 'onNewIntent', []);
    };

    WebIntent.prototype.sendBroadcast = function(params, success, fail) {
        return cordova.exec(function(args) {
            success(args);
        }, function(args) {
            fail(args);
        }, 'WebIntent', 'sendBroadcast', [params]);
    };
	
	


    WebIntent.startreader = function(callback, name) {
        console.log("ici"+name);
        return cordova.exec(function(args) {
            callback(args);//alert("new tag" + args);//callback(args);
        }, function(args) {
        }, 'WebIntent', 'startreader', [name]);
    };
	
	
	
cordova.WebIntent = WebIntent;
for(var i=0;i<10;i++) console.log("kkk");
for(var propertyName in cordova.WebIntent){
        console.log(propertyName);
    }

    window.webintent = new WebIntent();
    

    // backwards compatibility
    window.plugins = window.plugins || {};
    window.plugins.webintent = window.webintent;
})(window.PhoneGap || window.Cordova || window.cordova);

});
