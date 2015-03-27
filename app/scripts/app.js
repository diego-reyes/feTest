/*jshint unused: vars */
define(['angular', 'controllers/main','services/customerservices']/*deps*/, function (angular, MainCtrl, AboutCtrl, CustomerServicesFactory)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name feAsigApp
   * @description
   * # feAsigApp
   *
   * Main module of the application.
   */
  return angular
    .module('feAsigApp', ['feAsigApp.controllers.MainCtrl',
'feAsigApp.services.CustomerServices',
/*angJSDeps*/
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ngAnimate',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
