define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name feAsigApp.CustomerServices
   * @description
   * # CustomerServices
   * Factory in the feAsigApp.
   */
  angular.module('feAsigApp.services.CustomerServices', ['ngResource'])
    .factory('CustomerServices', ['$resource',
	  function($resource){
	    var odataPort = '63291';
		var odataUrl = 'http://localhost:'+odataPort+'/api/customers';
		return $resource(odataUrl, {},
		{
		  get: {method:'GET', isArray:true}
		});
    }]);
});
