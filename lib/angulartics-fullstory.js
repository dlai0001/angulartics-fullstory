(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name angulartics.fullstory
 * Enables analytics support for FullStory (http://fullstory.com)
 */
angular.module('angulartics.fullstory', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  angulartics.waitForVendorApi('FS', 500, '__loaded', function (FS) {
    $analyticsProvider.registerSetUsername(function (userId) {
      // This is an example script - don't forget to change it!
      debugger;
      FS.identify(userId, {});
    });
    $analyticsProvider.registerSetAlias(function (userId) {
      // not supported
    });
    $analyticsProvider.registerSetSuperPropertiesOnce(function (properties) {
      FS.setUserVars(properties); // Set properties for now
    });
    $analyticsProvider.registerSetSuperProperties(function (properties) {
      FS.setUserVars(properties); // Set properties for now
    });
    $analyticsProvider.registerSetUserPropertiesOnce(function (properties) {
      FS.setUserVars(properties); // Set properties for now
    });
    $analyticsProvider.registerSetUserProperties(function (properties) {
      FS.setUserVars(properties);
    });
    $analyticsProvider.registerPageTrack(function (path) {
      // not supported
    });
    $analyticsProvider.registerEventTrack(function (action, properties, callback) {
      // not supported
    });
    $analyticsProvider.registerIncrementProperty(function (property, value) {
      // not supported
    });
    $analyticsProvider.registerUserTimings(function (action, properties) {
      // not supported
    });
  });

}]);

})(window, window.angular);
