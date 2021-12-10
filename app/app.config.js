/**
 * Configuration for the main application, including
 * routes and application wide configuration.
 */

'use strict';

var app = angular.module('threatwareApp')

//route configuration. Default to /modules
app.config(['$routeProvider',
  function config($routeProvider) {
    $routeProvider.
      when('/modules', {
        template: '<module-list></module-list>'
      }).
      when('/modules/:module', {
        template: '<module-config></module-config>'
      }).
      otherwise('/modules');
  }
]);

//load the environment configuration
app.constant("appConfig", window.appConfig);

//Set up common header to include the user token
app.run(function($http) {
  $http.defaults.headers.common['user_token'] = window.appConfig.user_token;
});


