'use strict';

angular.module('GithubHamletApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/listApis', {
        templateUrl: 'views/listApis.html',
        controller: 'ListApisCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
