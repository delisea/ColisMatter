cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-meteor-webapp.WebAppLocalServer",
        "file": "plugins/cordova-plugin-meteor-webapp/www/webapp_local_server.js",
        "pluginId": "cordova-plugin-meteor-webapp",
        "merges": [
            "WebAppLocalServer"
        ]
    },
    {
        "id": "cordova-plugin-statusbar.statusbar",
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "id": "com.borismus.webintent.WebIntent",
        "file": "plugins/com.borismus.webintent/www/webintent.js",
        "pluginId": "com.borismus.webintent",
        "clobbers": [
            "WebIntent"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-compat": "1.1.0",
    "cordova-plugin-geolocation": "2.4.1",
    "cordova-plugin-whitelist": "1.3.1",
    "cordova-plugin-wkwebview-engine": "1.1.1",
    "cordova-plugin-meteor-webapp": "1.4.0",
    "cordova-plugin-statusbar": "2.2.1",
    "cordova-plugin-splashscreen": "4.0.1",
    "com.borismus.webintent": "1.0.0"
};
// BOTTOM OF METADATA
});