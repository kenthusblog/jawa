cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-promise-polyfill.Promise",
      "file": "plugins/cordova-promise-polyfill/www/Promise.js",
      "pluginId": "cordova-promise-polyfill",
      "runs": true
    },
    {
      "id": "cordova-promise-polyfill.promise.min",
      "file": "plugins/cordova-promise-polyfill/www/promise.min.js",
      "pluginId": "cordova-promise-polyfill"
    },
    {
      "id": "cordova-plugin-admob-free.AdMob",
      "file": "plugins/cordova-plugin-admob-free/www/admob.js",
      "pluginId": "cordova-plugin-admob-free",
      "clobbers": [
        "admob",
        "AdMob",
        "plugins.AdMob"
      ]
    },
    {
      "id": "cordova-plugin-codeplay-share-app-link.codeplayshareapplink",
      "file": "plugins/cordova-plugin-codeplay-share-app-link/www/codeplayshareapplink.js",
      "pluginId": "cordova-plugin-codeplay-share-app-link",
      "clobbers": [
        "cordova.plugins.codeplayshareapplink"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-admob-sdk": "0.24.1",
    "cordova-promise-polyfill": "0.0.2",
    "cordova-plugin-admob-free": "0.27.0",
    "cordova-plugin-codeplay-share-app-link": "0.0.1",
    "cordova-plugin-whitelist": "1.3.5"
  };
});