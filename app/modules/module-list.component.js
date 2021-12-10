/**
 * source code body for moduleList to show a list of the current modules or scanning tools 
 * available in the system.
*/

'use strict';

angular.
  module('moduleList').
  component('moduleList', {
    templateUrl: 'modules/module-list.template.html',
    controller: ['$http', 'appConfig', function moduleList($http, appConfig) {

      var self = this;

      //generate the url
      var url = appConfig.backend_url + "/modules/list";

      //this is the model holding the data to be displayed on the page
      self.modules = [];

      $http.get(url).then(function (response) {
        self.modules = response.data.result;
      });
    }]
  });
