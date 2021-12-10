/**
 * source code body for moduleConfig to view and modify a scanning tool's setup.
*/

'use strict';

angular.
  module('moduleConfig').
  component('moduleConfig', {
    templateUrl: 'modules/module-config.template.html',
    controller: ['$http', '$routeParams', '$location', 'appConfig', function moduleConfig($http, $routeParams, $location, appConfig) {

      //define a handle of the object
      var self = this;

      //the config attribute is to store the scanning tool's parameter
      self.config = {};

      //generate the backend server's url
      self.url = appConfig.backend_url + `/modules/${$routeParams.module}/config`;

      //$routeParams.module is the scanning tool's name, which is defined as module name in 
      //the backend server
      if (!$routeParams.module) {
        $location.path("/");

      } else {

        //load data from backend server and show the current parameter setup
        $http.get(self.url).then(function (response) {
          self.config = response.data.result;
        });

      }

      //save the changes and return back to the module list screen
      self.save = function () {
        $http.post(self.url, { "configuration": self.config }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } })
          .then(function (response) {
            $location.path("/");
          })
      };
    }]
  }
);
